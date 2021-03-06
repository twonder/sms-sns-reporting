import { CfnOutput, Construct, Stage, StageProps } from '@aws-cdk/core';
/**
 * Deployable unit of web service app
 */
export declare class SmsSnsReportingStage extends Stage {
    readonly urlOutput: CfnOutput;
    constructor(scope: Construct, id: string, props?: StageProps);
}
