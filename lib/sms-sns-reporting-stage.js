"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmsSnsReportingStage = void 0;
const core_1 = require("@aws-cdk/core");
const sms_sns_reporting_stack_1 = require("./sms-sns-reporting-stack");
/**
 * Deployable unit of web service app
 */
class SmsSnsReportingStage extends core_1.Stage {
    constructor(scope, id, props) {
        super(scope, id, props);
        const service = new sms_sns_reporting_stack_1.SmsSnsReportingStack(this, 'SmsSendAPI');
        // Expose SmsSnsReportingStack's output one level higher
        this.urlOutput = service.urlOutput;
    }
}
exports.SmsSnsReportingStage = SmsSnsReportingStage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21zLXNucy1yZXBvcnRpbmctc3RhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzbXMtc25zLXJlcG9ydGluZy1zdGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx3Q0FBd0U7QUFDeEUsdUVBQWlFO0FBRWpFOztHQUVHO0FBQ0gsTUFBYSxvQkFBcUIsU0FBUSxZQUFLO0lBRzdDLFlBQVksS0FBZ0IsRUFBRSxFQUFVLEVBQUUsS0FBa0I7UUFDMUQsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFeEIsTUFBTSxPQUFPLEdBQUcsSUFBSSw4Q0FBb0IsQ0FBQyxJQUFJLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFFN0Qsd0RBQXdEO1FBQ3hELElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQztJQUNyQyxDQUFDO0NBQ0Y7QUFYRCxvREFXQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENmbk91dHB1dCwgQ29uc3RydWN0LCBTdGFnZSwgU3RhZ2VQcm9wcyB9IGZyb20gJ0Bhd3MtY2RrL2NvcmUnO1xuaW1wb3J0IHsgU21zU25zUmVwb3J0aW5nU3RhY2sgfSBmcm9tICcuL3Ntcy1zbnMtcmVwb3J0aW5nLXN0YWNrJztcblxuLyoqXG4gKiBEZXBsb3lhYmxlIHVuaXQgb2Ygd2ViIHNlcnZpY2UgYXBwXG4gKi9cbmV4cG9ydCBjbGFzcyBTbXNTbnNSZXBvcnRpbmdTdGFnZSBleHRlbmRzIFN0YWdlIHtcbiAgcHVibGljIHJlYWRvbmx5IHVybE91dHB1dDogQ2ZuT3V0cHV0O1xuICBcbiAgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM/OiBTdGFnZVByb3BzKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCBwcm9wcyk7XG5cbiAgICBjb25zdCBzZXJ2aWNlID0gbmV3IFNtc1Nuc1JlcG9ydGluZ1N0YWNrKHRoaXMsICdTbXNTZW5kQVBJJyk7XG4gICAgXG4gICAgLy8gRXhwb3NlIFNtc1Nuc1JlcG9ydGluZ1N0YWNrJ3Mgb3V0cHV0IG9uZSBsZXZlbCBoaWdoZXJcbiAgICB0aGlzLnVybE91dHB1dCA9IHNlcnZpY2UudXJsT3V0cHV0O1xuICB9XG59Il19