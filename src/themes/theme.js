import light from './light';

const matrixes = { light };

export const getStylesByTheme = theme => {
    const matrix = matrixes[theme];
    return {
        color: matrix.colors.color_01,

        positionColor: matrix.colors.color_02,

        statusBlockBorder: matrix.colors.color_04,
        statusBlockBackground: matrix.colors.color_03,

        servicesBlockBorder: matrix.colors.color_04,
        servicesBlockBodyBorder: matrix.colors.color_05,
        servicesFirstBarBackground: matrix.colors.color_06,
        servicesOtherBarBackground: matrix.colors.color_07,

        commentsHeaderModeColor: matrix.colors.color_08,

        commentsMessageBlock: matrix.colors.color_09,
        commentsMessageBlockBorder: matrix.colors.color_10,
        commentsMessageHeaderDateColor: matrix.colors.color_02,

        commentsFooterBackground: matrix.colors.color_11,
        commentsFooterTextAreaBorder: matrix.colors.color_13,
        commentsFooterTextAreaBackground: matrix.colors.color_12,

        buttonColor: matrix.colors.color_01,
        buttonBackground: matrix.colors.color_14,
    };
};