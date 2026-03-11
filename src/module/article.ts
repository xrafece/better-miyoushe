import { isMiyousheArticle } from "@/util/pageType";

class ArticleImageUpgrader {
    private selector = '.mhy-article-page .ql-image .ql-image-box img';
    private observer: MutationObserver | null = null;

    private processImage(img: HTMLImageElement) {
        const largeSrc = img.getAttribute('large');
        const currentSrc = img.getAttribute('src');

        if (!largeSrc) return;

        // 核心：判定 src 是否需要同步，并使用 dataset 锁死，防止重复触发 Log
        if (currentSrc !== largeSrc || img.dataset.upgraded !== largeSrc) {
            img.setAttribute('src', largeSrc);
            img.removeAttribute('srcset');
            img.dataset.upgraded = largeSrc;
            
            console.log('Better Miyoushe: [Delayed Sync] Image upgraded ✅');
        }
    }

    private scan() {
        document.querySelectorAll(this.selector).forEach(el => {
            this.processImage(el as HTMLImageElement);
        });
    }

    // 接收一个延迟参数，默认为 500ms
    public init(delay: number = 500) {
        if (!isMiyousheArticle()) return;

        // 使用 setTimeout 确保在页面框架基本稳定后再介入
        setTimeout(() => {
            console.log(`Better Miyoushe: Module started after ${delay}ms delay.`);
            
            // 1. 延迟后立即扫一遍已有图片
            this.scan();

            // 2. 启动观察者，监控后续动态加载的内容
            this.observer = new MutationObserver((mutations) => {
                for (const mutation of mutations) {
                    if (mutation.type === 'attributes' && mutation.target instanceof HTMLImageElement) {
                        this.processImage(mutation.target);
                    } else if (mutation.addedNodes.length > 0) {
                        mutation.addedNodes.forEach(node => {
                            if (node instanceof HTMLElement) {
                                const imgs = node.querySelectorAll(this.selector);
                                imgs.forEach(img => this.processImage(img as HTMLImageElement));
                            }
                        });
                    }
                }
            });

            this.observer.observe(document.body, {
                childList: true,
                subtree: true,
                attributes: true,
                attributeFilter: ['src', 'large']
            });
        }, delay);
    }
}

// 导出函数，你可以在这里决定全局延迟多久
export const initArticleModule = () => {
    const upgrader = new ArticleImageUpgrader();
    
    // 即使 DOMContentLoaded 了，我们也额外等 500ms 确保 Vue 渲染完成
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => upgrader.init(800));
    } else {
        upgrader.init(800);
    }
};