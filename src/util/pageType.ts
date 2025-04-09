const host = location.host
const pathname = location.pathname

const currentPageType = () => {
    if (host === 'www.miyoushe.com') {
        return 'miyoushe'
    }
    if(host==='act.mihoyo.com' && pathname.includes('calculator')){
        return 'ysCalculator'
    }

    return 'mihoyo'
}

export const isMiyoushe = () => currentPageType() === 'miyoushe'
export const isYsCalculator = () => currentPageType() === 'ysCalculator'
export const isMihoyo = () => currentPageType() === 'mihoyo'
