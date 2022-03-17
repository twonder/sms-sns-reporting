import { Construct, SecretValue, Stack, StackProps } from '@aws-cdk/core';
import { CdkPipeline, CodePipeline, CodePipelineSource, ShellStep } from "@aws-cdk/pipelines";

/**
 * The stack that defines the application pipeline
 */
export class SmsSnsReportingPipelineStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const pipeline = new CodePipeline(this, 'Pipeline', {
      // The pipeline name
      pipelineName: 'SmsApiPipeline',

       // How it will be built and synthesized
       synth: new ShellStep('Synth', {
         // Where the source can be found
         input: CodePipelineSource.gitHub('twonder/sms-sns-reporting', 'main', {
          authentication: SecretValue.secretsManager('github-cdk'),
         }),
         
         // Install dependencies, build and run cdk synth
         commands: [
           'npm ci',
           'npm run build',
           'npx cdk synth'
         ],
       }),
    });

    // This is where we add the application stages
    // ...
  }
}