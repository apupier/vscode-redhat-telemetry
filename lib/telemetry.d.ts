interface TelemetryEvent {
    type?: string;
    name?: string;
    properties?: any;
    measures?: any;
}
export declare namespace Telemetry {
    function send(event: TelemetryEvent): void;
}
export {};
//# sourceMappingURL=telemetry.d.ts.map