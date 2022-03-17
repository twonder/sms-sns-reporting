"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmsSnsReportingStack = void 0;
const apigw = require("@aws-cdk/aws-apigateway");
const lambda = require("@aws-cdk/aws-lambda");
const core_1 = require("@aws-cdk/core");
const path = require("path");
// import * as sqs from 'aws-cdk-lib/aws-sqs';
class SmsSnsReportingStack extends core_1.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        // The Lambda function that contains the functionality
        const handler = new lambda.Function(this, 'Lambda', {
            runtime: lambda.Runtime.NODEJS_14_X,
            handler: 'handler.handler',
            code: lambda.Code.fromAsset(path.resolve(__dirname, 'lambda')),
        });
        // An API Gateway to make the Lambda web-accessible
        const gw = new apigw.LambdaRestApi(this, 'Gateway', {
            description: 'Endpoint for a simple Lambda-powered web service',
            handler,
        });
        this.urlOutput = new core_1.CfnOutput(this, 'Url', {
            value: gw.url,
        });
    }
}
exports.SmsSnsReportingStack = SmsSnsReportingStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21zLXNucy1yZXBvcnRpbmctc3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzbXMtc25zLXJlcG9ydGluZy1zdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxpREFBaUQ7QUFDakQsOENBQThDO0FBQzlDLHdDQUF3RTtBQUN4RSw2QkFBNkI7QUFFN0IsOENBQThDO0FBRTlDLE1BQWEsb0JBQXFCLFNBQVEsWUFBSztJQU03QyxZQUFZLEtBQWdCLEVBQUUsRUFBVSxFQUFFLEtBQWtCO1FBQzFELEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXhCLHNEQUFzRDtRQUN0RCxNQUFNLE9BQU8sR0FBRyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRTtZQUNsRCxPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXO1lBQ25DLE9BQU8sRUFBRSxpQkFBaUI7WUFDMUIsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQy9ELENBQUMsQ0FBQztRQUVILG1EQUFtRDtRQUNuRCxNQUFNLEVBQUUsR0FBRyxJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRTtZQUNsRCxXQUFXLEVBQUUsa0RBQWtEO1lBQy9ELE9BQU87U0FDUixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksZ0JBQVMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFO1lBQzFDLEtBQUssRUFBRSxFQUFFLENBQUMsR0FBRztTQUNkLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRjtBQTFCRCxvREEwQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBhcGlndyBmcm9tICdAYXdzLWNkay9hd3MtYXBpZ2F0ZXdheSc7XG5pbXBvcnQgKiBhcyBsYW1iZGEgZnJvbSAnQGF3cy1jZGsvYXdzLWxhbWJkYSc7XG5pbXBvcnQgeyBDZm5PdXRwdXQsIENvbnN0cnVjdCwgU3RhY2ssIFN0YWNrUHJvcHMgfSBmcm9tICdAYXdzLWNkay9jb3JlJztcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5cbi8vIGltcG9ydCAqIGFzIHNxcyBmcm9tICdhd3MtY2RrLWxpYi9hd3Mtc3FzJztcblxuZXhwb3J0IGNsYXNzIFNtc1Nuc1JlcG9ydGluZ1N0YWNrIGV4dGVuZHMgU3RhY2sge1xuICAvKipcbiAgICogVGhlIFVSTCBvZiB0aGUgQVBJIEdhdGV3YXkgZW5kcG9pbnQsIGZvciB1c2UgaW4gdGhlIGludGVnIHRlc3RzXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgdXJsT3V0cHV0OiBDZm5PdXRwdXQ7XG5cbiAgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM/OiBTdGFja1Byb3BzKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCBwcm9wcyk7XG5cbiAgICAvLyBUaGUgTGFtYmRhIGZ1bmN0aW9uIHRoYXQgY29udGFpbnMgdGhlIGZ1bmN0aW9uYWxpdHlcbiAgICBjb25zdCBoYW5kbGVyID0gbmV3IGxhbWJkYS5GdW5jdGlvbih0aGlzLCAnTGFtYmRhJywge1xuICAgICAgcnVudGltZTogbGFtYmRhLlJ1bnRpbWUuTk9ERUpTXzE0X1gsXG4gICAgICBoYW5kbGVyOiAnaGFuZGxlci5oYW5kbGVyJyxcbiAgICAgIGNvZGU6IGxhbWJkYS5Db2RlLmZyb21Bc3NldChwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnbGFtYmRhJykpLFxuICAgIH0pO1xuXG4gICAgLy8gQW4gQVBJIEdhdGV3YXkgdG8gbWFrZSB0aGUgTGFtYmRhIHdlYi1hY2Nlc3NpYmxlXG4gICAgY29uc3QgZ3cgPSBuZXcgYXBpZ3cuTGFtYmRhUmVzdEFwaSh0aGlzLCAnR2F0ZXdheScsIHtcbiAgICAgIGRlc2NyaXB0aW9uOiAnRW5kcG9pbnQgZm9yIGEgc2ltcGxlIExhbWJkYS1wb3dlcmVkIHdlYiBzZXJ2aWNlJyxcbiAgICAgIGhhbmRsZXIsXG4gICAgfSk7XG5cbiAgICB0aGlzLnVybE91dHB1dCA9IG5ldyBDZm5PdXRwdXQodGhpcywgJ1VybCcsIHtcbiAgICAgIHZhbHVlOiBndy51cmwsXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==