export enum FillBlankConfig {
    max = 'max', 
    min = 'min', 
    random = 'random', 
    omit = 'omit'
}
export enum AutoCompleteScoreBy {
    equal = 'equal',
    latestMore = 'desc',
    latestLess = 'asc',
}

export type DecisionMakerConfig = {
    hot: boolean;
    fillBlank: FillBlankConfig,
    autoCompleteScoreBy: AutoCompleteScoreBy
}
