export const CONSTS = {
    SIZES: {
        MICRO: 'micro',
        MINI: 'mini',
        SM: 'sm',
        MD: 'md',
        LG: 'lg'
    },
    TYPES: {
        ROUND: 'round',
        OBLONG: 'oblong',
        WIDE: 'wide'
    }
}

export const IMAGE_SIZES = {
    [CONSTS.SIZES.MICRO]: 30,
    [CONSTS.SIZES.MINI]: 50,
    [CONSTS.SIZES.SM]: 75,
    [CONSTS.SIZES.MD]: 200,
    [CONSTS.SIZES.LG]: 350
}

export const getImgPath = ((filename) => `/assets/images/${filename}`);