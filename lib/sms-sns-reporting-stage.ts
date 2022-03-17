import { CfnOutput, Construct, Stage, StageProps } from '@aws-cdk/core';
import { SmsSnsReportingStack } from './sms-sns-reporting-stack';

/**
 * Deployable unit of web service app
 */
export class SmsSnsReportingStage extends Stage {
  public readonly urlOutput: CfnOutput;
  
  constructor(scope: Construct, id: string, props?: StageProps) {
    super(scope, id, props);

    const service = new SmsSnsReportingStack(this, 'SmsSendAPI');
    
    // Expose SmsSnsReportingStack's output one level higher
    this.urlOutput = service.urlOutput;
  }
}