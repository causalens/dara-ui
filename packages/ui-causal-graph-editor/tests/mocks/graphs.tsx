import { CausalGraph, EdgeType, VariableType } from '../../src/types';

export const FRAUD: CausalGraph = {
    edges: {
        Age: {
            Fraud: {
                edge_type: EdgeType.DIRECTED_EDGE,
                meta: {},
            },
            'Marital Status Value=Married': {
                edge_type: EdgeType.DIRECTED_EDGE,
                meta: {},
            },
            'Number of Children': {
                edge_type: EdgeType.DIRECTED_EDGE,
                meta: {},
            },
        },
        'Authority Contacted': {
            Fraud: {
                edge_type: EdgeType.DIRECTED_EDGE,
                meta: {},
            },
        },
        CPI: {
            Salary: {
                edge_type: EdgeType.DIRECTED_EDGE,
                meta: {},
            },
        },
        'Car Value': {
            Fraud: {
                edge_type: EdgeType.DIRECTED_EDGE,
                meta: {},
            },
        },
        'Claim Type Value=Liability': {
            'Total Claim': {
                edge_type: EdgeType.DIRECTED_EDGE,
                meta: {},
            },
        },
        'Collision Type Value=Front': {
            'Claim Type Value=Liability': {
                edge_type: EdgeType.DIRECTED_EDGE,
                meta: {},
            },
            'Total Claim': {
                edge_type: EdgeType.DIRECTED_EDGE,
                meta: {},
            },
        },
        'Crime Rate': {
            Fraud: {
                edge_type: EdgeType.DIRECTED_EDGE,
                meta: {},
            },
        },
        'Education Level Value=Higher': {
            Fraud: {
                edge_type: EdgeType.DIRECTED_EDGE,
                meta: {},
            },
            'Occupation Value=Professional': {
                edge_type: EdgeType.DIRECTED_EDGE,
                meta: {},
            },
        },
        'Gender Value=F': {
            Salary: {
                edge_type: EdgeType.DIRECTED_EDGE,
                meta: {},
            },
        },
        'Location Value=EC': {
            'Crime Rate': {
                edge_type: EdgeType.DIRECTED_EDGE,
                meta: {},
            },
        },
        'Location Value=SE': {
            'Crime Rate': {
                edge_type: EdgeType.DIRECTED_EDGE,
                meta: {},
            },
        },
        'Location Value=SW': {
            'Crime Rate': {
                edge_type: EdgeType.DIRECTED_EDGE,
                meta: {},
            },
        },
        'Marital Status Value=Married': {
            Fraud: {
                edge_type: EdgeType.DIRECTED_EDGE,
                meta: {},
            },
        },
        'No-Claims Years': {
            Fraud: {
                edge_type: EdgeType.DIRECTED_EDGE,
                meta: {},
            },
        },
        'Number of Children': {
            Fraud: {
                edge_type: EdgeType.DIRECTED_EDGE,
                meta: {},
            },
        },
        'Occupation Value=Professional': {
            Salary: {
                edge_type: EdgeType.DIRECTED_EDGE,
                meta: {},
            },
        },
        'Previous Claims': {
            Fraud: {
                edge_type: EdgeType.DIRECTED_EDGE,
                meta: {},
            },
        },
        'Previous Claims Value': {
            Fraud: {
                edge_type: EdgeType.DIRECTED_EDGE,
                meta: {},
            },
        },
        Salary: {
            'Car Value': {
                edge_type: EdgeType.DIRECTED_EDGE,
                meta: {},
            },
            Fraud: {
                edge_type: EdgeType.DIRECTED_EDGE,
                meta: {},
            },
        },
        'Total Claim': {
            Fraud: {
                edge_type: EdgeType.DIRECTED_EDGE,
                meta: {},
            },
        },
        'Unemployment Rate': {
            Salary: {
                edge_type: EdgeType.DIRECTED_EDGE,
                meta: {},
            },
        },
        'Years with License': {
            Fraud: {
                edge_type: EdgeType.DIRECTED_EDGE,
                meta: {},
            },
        },
    },
    nodes: {
        Age: {
            meta: {},
            variable_type: VariableType.UNSPECIFIED,
        },
        'Authority Contacted': {
            meta: {},
            variable_type: VariableType.UNSPECIFIED,
        },
        CPI: {
            meta: {},
            variable_type: VariableType.UNSPECIFIED,
        },
        'Car Value': {
            meta: {},
            variable_type: VariableType.UNSPECIFIED,
        },
        'Claim Type Value=Liability': {
            meta: {},
            variable_type: VariableType.UNSPECIFIED,
        },
        'Collision Type Value=Front': {
            meta: {},
            variable_type: VariableType.UNSPECIFIED,
        },
        'Crime Rate': {
            meta: {},
            variable_type: VariableType.UNSPECIFIED,
        },
        'Education Level Value=Higher': {
            meta: {},
            variable_type: VariableType.UNSPECIFIED,
        },
        Fraud: {
            meta: {},
            variable_type: VariableType.UNSPECIFIED,
        },
        'Gender Value=F': {
            meta: {},
            variable_type: VariableType.UNSPECIFIED,
        },
        'Location Value=EC': {
            meta: {},
            variable_type: VariableType.UNSPECIFIED,
        },
        'Location Value=SE': {
            meta: {},
            variable_type: VariableType.UNSPECIFIED,
        },
        'Location Value=SW': {
            meta: {},
            variable_type: VariableType.UNSPECIFIED,
        },
        'Marital Status Value=Married': {
            meta: {},
            variable_type: VariableType.UNSPECIFIED,
        },
        'No-Claims Years': {
            meta: {},
            variable_type: VariableType.UNSPECIFIED,
        },
        'Number of Children': {
            meta: {},
            variable_type: VariableType.UNSPECIFIED,
        },
        'Occupation Value=Professional': {
            meta: {},
            variable_type: VariableType.UNSPECIFIED,
        },
        'Previous Claims': {
            meta: {},
            variable_type: VariableType.UNSPECIFIED,
        },
        'Previous Claims Value': {
            meta: {},
            variable_type: VariableType.UNSPECIFIED,
        },
        Salary: {
            meta: {},
            variable_type: VariableType.UNSPECIFIED,
        },
        'Total Claim': {
            meta: {},
            variable_type: VariableType.UNSPECIFIED,
        },
        'Unemployment Rate': {
            meta: {},
            variable_type: VariableType.UNSPECIFIED,
        },
        'Years with License': {
            meta: {},
            variable_type: VariableType.UNSPECIFIED,
        },
    },
    version: '2',
};

export const SHIPPED_UNITS: CausalGraph = {
    edges: {
        'amg click throughs': {
            'ara rev shipped units acfu,7': {
                edge_type: EdgeType.DIRECTED_EDGE,
                meta: {},
            },
            'neo paid impressions search': {
                edge_type: EdgeType.DIRECTED_EDGE,
                meta: {},
            },
        },
        'amg cost calc combined': {
            'amg click throughs': {
                edge_type: EdgeType.DIRECTED_EDGE,
                meta: {},
            },
            'amg impr combined': {
                edge_type: EdgeType.DIRECTED_EDGE,
                meta: {},
            },
        },
        'amg impr combined': {
            'amg click throughs': {
                edge_type: EdgeType.DIRECTED_EDGE,
                meta: {},
            },
        },
        'ams ams clicks': {
            'ara rev shipped units acfu,7': {
                edge_type: EdgeType.DIRECTED_EDGE,
                meta: {},
            },
        },
        'ams ams spend': {
            'ams ams clicks': {
                edge_type: EdgeType.DIRECTED_EDGE,
                meta: {},
            },
            'ams sumimpressions': {
                edge_type: EdgeType.DIRECTED_EDGE,
                meta: {},
            },
        },
        'ams sumimpressions': {
            'ams ams clicks': {
                edge_type: EdgeType.DIRECTED_EDGE,
                meta: {},
            },
            'ara traffic out of stock views': {
                edge_type: EdgeType.DIRECTED_EDGE,
                meta: {},
            },
        },
        'ara traffic glance views': {
            'ara rev shipped units acfu,7': {
                edge_type: EdgeType.DIRECTED_EDGE,
                meta: {},
            },
        },
        'ara traffic in stock %': {
            'ara rev shipped units acfu,7': {
                edge_type: EdgeType.DIRECTED_EDGE,
                meta: {},
            },
            'ara traffic out of stock views': {
                edge_type: EdgeType.DIRECTED_EDGE,
                meta: {},
            },
            'rnr avg star rating': {
                edge_type: EdgeType.DIRECTED_EDGE,
                meta: {},
            },
        },
        'ara traffic out of stock views': {
            'ara rev shipped units acfu,7': {
                edge_type: EdgeType.DIRECTED_EDGE,
                meta: {},
            },
        },
        'ara traffic prime shipping views': {
            'ams ams clicks': {
                edge_type: EdgeType.DIRECTED_EDGE,
                meta: {},
            },
            'ara rev shipped units acfu,7': {
                edge_type: EdgeType.DIRECTED_EDGE,
                meta: {},
            },
            'ara traffic glance views': {
                
                edge_type: EdgeType.DIRECTED_EDGE,
                meta: {},
            },
        },
        'fb combined click': {
            'ara rev shipped units acfu,7': {
                
                edge_type: EdgeType.DIRECTED_EDGE,
                meta: {},
            },
        },
        'fb combined impressions': {
            'fb combined click': {
                
                edge_type: EdgeType.DIRECTED_EDGE,
                meta: {},
            },
        },
        'fb combined spend': {
            'fb combined click': {
                
                edge_type: EdgeType.DIRECTED_EDGE,
                meta: {},
            },
            'fb combined impressions': {
                
                edge_type: EdgeType.DIRECTED_EDGE,
                meta: {},
            },
        },
        'neo org branded clicks': {
            'ara rev shipped units acfu,7': {
                
                edge_type: EdgeType.DIRECTED_EDGE,
                meta: {},
            },
        },
        'neo org branded impressions': {
            'neo org branded clicks': {
                
                edge_type: EdgeType.DIRECTED_EDGE,
                meta: {},
            },
            'neo org unbranded impressions': {
                
                edge_type: EdgeType.DIRECTED_EDGE,
                meta: {},
            },
        },
        'neo org unbranded clicks': {
            'ara rev shipped units acfu,7': {
                
                edge_type: EdgeType.DIRECTED_EDGE,
                meta: {},
            },
        },
        'neo org unbranded impressions': {
            'neo org unbranded clicks': {
                
                edge_type: EdgeType.DIRECTED_EDGE,
                meta: {},
            },
            'rnr avg star rating': {
                
                edge_type: EdgeType.DIRECTED_EDGE,
                meta: {},
            },
        },
        'neo paid clicks search': {
            'ara rev shipped units acfu,7': {
                
                edge_type: EdgeType.DIRECTED_EDGE,
                meta: {},
            },
            'neo org unbranded clicks': {
                
                edge_type: EdgeType.DIRECTED_EDGE,
                meta: {},
            },
            'sos paid pd wtd impressions': {
                
                edge_type: EdgeType.DIRECTED_EDGE,
                meta: {},
            },
        },
        'neo paid impressions search': {
            'neo paid clicks search': {
                
                edge_type: EdgeType.DIRECTED_EDGE,
                meta: {},
            },
        },
        'neo paid neo ps cost': {
            'neo paid clicks search': {
                
                edge_type: EdgeType.DIRECTED_EDGE,
                meta: {},
            },
            'neo paid impressions search': {
                
                edge_type: EdgeType.DIRECTED_EDGE,
                meta: {},
            },
        },
        'rnr avg star rating': {
            'amg impr combined': {
                
                edge_type: EdgeType.DIRECTED_EDGE,
                meta: {},
            },
        },
        'rnr total number of reviews': {
            'ams ams clicks': {
                
                edge_type: EdgeType.DIRECTED_EDGE,
                meta: {},
            },
            'ams sumimpressions': {
                
                edge_type: EdgeType.DIRECTED_EDGE,
                meta: {},
            },
        },
        'sos org org wtd impressions': {
            'ara rev shipped units acfu,7': {
                
                edge_type: EdgeType.DIRECTED_EDGE,
                meta: {},
            },
            'neo org branded clicks': {
                
                edge_type: EdgeType.DIRECTED_EDGE,
                meta: {},
            },
        },
        'sos org sos org avg rank': {
            'sos org org wtd impressions': {
                
                edge_type: EdgeType.DIRECTED_EDGE,
                meta: {},
            },
        },
        'sos paid pd wtd impressions': {
            'sos org org wtd impressions': {
                
                edge_type: EdgeType.DIRECTED_EDGE,
                meta: {},
            },
        },
    },
    nodes: {
        'amg click throughs': {
            
            
            meta: {},
        },
        'amg cost calc combined': {
            
            
            meta: {},
        },
        'amg impr combined': {
            
            
            meta: {},
        },
        'ams ams clicks': {
            
            
            meta: {},
        },
        'ams ams spend': {
            
            
            meta: {},
        },
        'ams sumimpressions': {
            
            
            meta: {},
        },
        'ara rev shipped units acfu,7': {
            
            
            meta: {},
        },
        'ara traffic glance views': {
            
            
            meta: {},
        },
        'ara traffic in stock %': {
            
            
            meta: {},
        },
        'ara traffic out of stock views': {
            
            
            meta: {},
        },
        'ara traffic prime shipping views': {
            
            
            meta: {},
        },
        'fb combined click': {
            
            
            meta: {},
        },
        'fb combined impressions': {
            
            
            meta: {},
        },
        'fb combined spend': {
            
            
            meta: {},
        },
        'neo org branded clicks': {
            
            
            meta: {},
        },
        'neo org branded impressions': {
            
            
            meta: {},
        },
        'neo org unbranded clicks': {
            
            
            meta: {},
        },
        'neo org unbranded impressions': {
            
            
            meta: {},
        },
        'neo paid clicks search': {
            
            
            meta: {},
        },
        'neo paid impressions search': {
            
            
            meta: {},
        },
        'neo paid neo ps cost': {
            
            
            meta: {},
        },
        'rnr avg star rating': {
            
            
            meta: {},
        },
        'rnr total number of reviews': {
            
            
            meta: {},
        },
        'sos org org wtd impressions': {
            
            
            meta: {},
        },
        'sos org sos org avg rank': {
            
            
            meta: {},
        },
        'sos paid pd wtd impressions': {         
            meta: {},
        },
    },
    version: '0.1.10',
};
