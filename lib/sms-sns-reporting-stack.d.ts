import { CfnOutput, Construct, Stack, StackProps } from '@aws-cdk/core';
export declare class SmsSnsReportingStack extends Stack {
    /**
     * The URL of the API Gateway endpoint, for use in the integ tests
     */
    readonly urlOutput: CfnOutput;
    constructor(scope: Construct, id: string, props?: StackProps);
}
