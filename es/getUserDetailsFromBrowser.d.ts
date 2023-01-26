export declare function getUserDetailsFromBrowser(): {
    country: any;
    system: {
        device: string;
        operating_system: string;
        platform: string;
        device_model_name: string;
        network: any;
        RAM: string;
        logical_processors: any;
        system_selected_language: any;
        system_languages: any;
        system_date: string;
        system_time_zone: string;
        system_date_format: {
            calendar: string;
            day: string | undefined;
            month: string | undefined;
            year: string | undefined;
        };
    };
};
export default getUserDetailsFromBrowser;
