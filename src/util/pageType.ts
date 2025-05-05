const host = location.host
const pathname = location.pathname

const currentPageType = () => {
    if (host === 'www.miyoushe.com') {
        return 'miyoushe'
    }
    if(host==='act.mihoyo.com' && pathname.includes('ys/app/interactive-map')){
        return 'ysMap'
    }
    if(host==='act.mihoyo.com' && pathname.includes('ys/event/calculator')){
        return 'ysCalculator'
    }

    return 'mihoyo'
}

export const isMiyoushe = () => currentPageType() === 'miyoushe'
export const isYsCalculator = () => currentPageType() === 'ysCalculator'
export const isYsMap = () => currentPageType() === 'ysMap'
export const isMihoyo = () => currentPageType() === 'mihoyo'
