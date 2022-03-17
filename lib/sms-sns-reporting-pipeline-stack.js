"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmsSnsReportingPipelineStack = void 0;
const core_1 = require("@aws-cdk/core");
const pipelines_1 = require("@aws-cdk/pipelines");
const sms_sns_reporting_stage_1 = require("./sms-sns-reporting-stage");
/**
 * The stack that defines the application pipeline
 */
class SmsSnsReportingPipelineStack extends core_1.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        const pipeline = new pipelines_1.CodePipeline(this, 'Pipeline', {
            // The pipeline name
            pipelineName: 'SmsApiPipeline',
            // How it will be built and synthesized
            synth: new pipelines_1.ShellStep('Synth', {
                // Where the source can be found
                input: pipelines_1.CodePipelineSource.gitHub('twonder/sms-sns-reporting', 'main', {
                    authentication: core_1.SecretValue.secretsManager('github-cdk'),
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
        pipeline.addStage(new sms_sns_reporting_stage_1.SmsSnsReportingStage(this, 'PreProd', {
            env: { account: '019228762063', region: 'us-east-1' }
        }));
    }
}
exports.SmsSnsReportingPipelineStack = SmsSnsReportingPipelineStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21zLXNucy1yZXBvcnRpbmctcGlwZWxpbmUtc3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzbXMtc25zLXJlcG9ydGluZy1waXBlbGluZS1zdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx3Q0FBMEU7QUFDMUUsa0RBQThGO0FBQzlGLHVFQUFpRTtBQUVqRTs7R0FFRztBQUNILE1BQWEsNEJBQTZCLFNBQVEsWUFBSztJQUNyRCxZQUFZLEtBQWdCLEVBQUUsRUFBVSxFQUFFLEtBQWtCO1FBQzFELEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXhCLE1BQU0sUUFBUSxHQUFHLElBQUksd0JBQVksQ0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFFO1lBQ2xELG9CQUFvQjtZQUNwQixZQUFZLEVBQUUsZ0JBQWdCO1lBRTdCLHVDQUF1QztZQUN2QyxLQUFLLEVBQUUsSUFBSSxxQkFBUyxDQUFDLE9BQU8sRUFBRTtnQkFDNUIsZ0NBQWdDO2dCQUNoQyxLQUFLLEVBQUUsOEJBQWtCLENBQUMsTUFBTSxDQUFDLDJCQUEyQixFQUFFLE1BQU0sRUFBRTtvQkFDckUsY0FBYyxFQUFFLGtCQUFXLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQztpQkFDeEQsQ0FBQztnQkFFRixnREFBZ0Q7Z0JBQ2hELFFBQVEsRUFBRTtvQkFDUixRQUFRO29CQUNSLGVBQWU7b0JBQ2YsZUFBZTtpQkFDaEI7YUFDRixDQUFDO1NBQ0osQ0FBQyxDQUFDO1FBRUgsOENBQThDO1FBQzlDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSw4Q0FBb0IsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFO1lBQzFELEdBQUcsRUFBRSxFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtTQUN0RCxDQUFDLENBQUMsQ0FBQTtJQUNMLENBQUM7Q0FDRjtBQTdCRCxvRUE2QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdHJ1Y3QsIFNlY3JldFZhbHVlLCBTdGFjaywgU3RhY2tQcm9wcyB9IGZyb20gJ0Bhd3MtY2RrL2NvcmUnO1xuaW1wb3J0IHsgQ2RrUGlwZWxpbmUsIENvZGVQaXBlbGluZSwgQ29kZVBpcGVsaW5lU291cmNlLCBTaGVsbFN0ZXAgfSBmcm9tIFwiQGF3cy1jZGsvcGlwZWxpbmVzXCI7XG5pbXBvcnQgeyBTbXNTbnNSZXBvcnRpbmdTdGFnZSB9IGZyb20gXCIuL3Ntcy1zbnMtcmVwb3J0aW5nLXN0YWdlXCI7XG5cbi8qKlxuICogVGhlIHN0YWNrIHRoYXQgZGVmaW5lcyB0aGUgYXBwbGljYXRpb24gcGlwZWxpbmVcbiAqL1xuZXhwb3J0IGNsYXNzIFNtc1Nuc1JlcG9ydGluZ1BpcGVsaW5lU3RhY2sgZXh0ZW5kcyBTdGFjayB7XG4gIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzPzogU3RhY2tQcm9wcykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwgcHJvcHMpO1xuXG4gICAgY29uc3QgcGlwZWxpbmUgPSBuZXcgQ29kZVBpcGVsaW5lKHRoaXMsICdQaXBlbGluZScsIHtcbiAgICAgIC8vIFRoZSBwaXBlbGluZSBuYW1lXG4gICAgICBwaXBlbGluZU5hbWU6ICdTbXNBcGlQaXBlbGluZScsXG5cbiAgICAgICAvLyBIb3cgaXQgd2lsbCBiZSBidWlsdCBhbmQgc3ludGhlc2l6ZWRcbiAgICAgICBzeW50aDogbmV3IFNoZWxsU3RlcCgnU3ludGgnLCB7XG4gICAgICAgICAvLyBXaGVyZSB0aGUgc291cmNlIGNhbiBiZSBmb3VuZFxuICAgICAgICAgaW5wdXQ6IENvZGVQaXBlbGluZVNvdXJjZS5naXRIdWIoJ3R3b25kZXIvc21zLXNucy1yZXBvcnRpbmcnLCAnbWFpbicsIHtcbiAgICAgICAgICBhdXRoZW50aWNhdGlvbjogU2VjcmV0VmFsdWUuc2VjcmV0c01hbmFnZXIoJ2dpdGh1Yi1jZGsnKSxcbiAgICAgICAgIH0pLFxuICAgICAgICAgXG4gICAgICAgICAvLyBJbnN0YWxsIGRlcGVuZGVuY2llcywgYnVpbGQgYW5kIHJ1biBjZGsgc3ludGhcbiAgICAgICAgIGNvbW1hbmRzOiBbXG4gICAgICAgICAgICducG0gY2knLFxuICAgICAgICAgICAnbnBtIHJ1biBidWlsZCcsXG4gICAgICAgICAgICducHggY2RrIHN5bnRoJ1xuICAgICAgICAgXSxcbiAgICAgICB9KSxcbiAgICB9KTtcblxuICAgIC8vIFRoaXMgaXMgd2hlcmUgd2UgYWRkIHRoZSBhcHBsaWNhdGlvbiBzdGFnZXNcbiAgICBwaXBlbGluZS5hZGRTdGFnZShuZXcgU21zU25zUmVwb3J0aW5nU3RhZ2UodGhpcywgJ1ByZVByb2QnLCB7XG4gICAgICBlbnY6IHsgYWNjb3VudDogJzAxOTIyODc2MjA2MycsIHJlZ2lvbjogJ3VzLWVhc3QtMScgfVxuICAgIH0pKVxuICB9XG59Il19