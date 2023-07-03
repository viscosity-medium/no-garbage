import {systemVariables} from "../../system/system";

const devServiceAccountKey = {
    "type": "service_account",
    "project_id": "dev-nogarbage",
    "private_key_id": "2cf92fe433611c295d5eefdcb3d2e32be9144b21",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCXaQtcml/JricJ\nuGuQYQowE1e70wsQV6bJiMg2XYLAWtE4bxi0l8rmtGWRZyxc2daPvsBDjEfzHSrf\n5NeIxwUhSWks0IQfDtQ83XammzIySKOqO8OFU3ZNvP6q9SWR44SJ2Ov24HLQt+E8\nYanlXoqQep2qphb/kAuU3MR0ma56tT0Pk4eqbFMddZSnKkVp2Y/EPPUZn3gfwsBX\nw0t84XkabWetVP/FmNFvkh5YT8Goq/wkXJjW0QAEkPpRzapUNtR02qY8TNwUeHdR\nxL8DCqRe9EdYzLGZP1kGIUp8qQsLTaQXvPG5/c4LXKYcY5nBV2nvX9/BiRP5eOYE\nIYNq1aCZAgMBAAECggEAAphFeLkR2x7i6HGIR48QxXv5Qp3AQ0oNu/Sh4f5H2qDx\n7lG/6smS0Xdo3o1DIQvh2Yzcay+y4qvfrWBvPNMcGW00RBUkgN2FhIKS/10wLHq6\n2402Wvok0DZsdoaUAUgFsyOqS5RiYIVFvlgyfM3LH5mDSxldDmtKKtDY7pb7EWxC\n6D88ch6wgvdl9tx4VWRygLemlVbJXm+wcYCa+9qNaGwX/N93Osa8gs2uWWdvVj2n\nvgYjqhrs/P3Qn/KV/xEKsI/1Pp5E5AB17/sAwsX8s9lRcvV/Z6xKcgiwN2DNe/Kj\nJWINk3kTTQFXZO677ZAw4ayfBzsTNAgQiJumsjyjfwKBgQDPknIO91ibReNkSPmQ\ngWhswiSbFiMmVk8rVFwkpjtWhEA2pd13ajTI6dSx5Ol/BkFNlmSpxS3/tavzz1cw\nWDHsFbctvd8RXvDIY+rQRa3nNXtcXYbbT6BJKKyo9/C33OVq8GF/l8tXI2YpbS2D\nbmrd5oyHUS0qhiGemWj6aY1IXwKBgQC6vEFMMtrpyluyGiCquQB2UdRK580xvRb5\nxoOekmb3JQ4sVl5Sqg+/UGFkUdlUpCJ8NvdQewAu/hkFVIpRu7h1ejccK9BuJ4Co\neuFiyZSbi8lL1Enj8B0iahJozVapPDPpbUlhruBfrdJJ/pbSclnz+0o0nR4Cmx7x\n79uBwcEaBwKBgDsPSQK3H+/2H7AOD2wtVd/0EWRLFS84SYhjlWAcKDACqx6hbPUo\nM+KinZEMN9+bkQMZcoTXhLIIJ+fUK9OmlHW+7ALIzmpr4Ai0XUBrQwLRNctfFRrb\nehi2yQG+ojA+Wsxlnugl8YZWnR/WX6fQx/lhOsTZtQcvaOtubO8rDzbzAoGAJqsD\nDoddY5o+wLO+XfvvR5EMV/KGQC16y4A7EyQX5EetFqtP3uhOWHyJnl+AlJFkfrpX\nHjhKQnDlt3/ZILGxscn8DX5ZK+ZMMxc3AuDhQBCDP4uXPXckYVL7uu4CawsHaOfz\nkSHIXqe86wuoKa36SJaZuCls5HdAwjK8DrOTjBMCgYEAnre6ZBFTJkFj/M0R43Km\nJyI/xl7uM1h/sFKeCV4Od0J88YLSsISmdo2RI6iI5yUHiZ/6i5dwzpWUx1mZJ5sE\n7HiXme3wj1MbATUq9uEzkzRr66F/lVj3aO93pSJI1wcmaRgT4Q5la3sMEC/YO+ys\nmtfgOSQLzOV5HwHIJBsaIOk=\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-539na@dev-nogarbage.iam.gserviceaccount.com",
    "client_id": "117402447571046959508",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-539na%40dev-nogarbage.iam.gserviceaccount.com",
    "universe_domain": "googleapis.com"
};

const prodServiceAccountKey = {
    "type": "service_account",
    "project_id": "nogarbage-7f3fb",
    "private_key_id": "e2c7fa1516dbc9528116f0f0ab235303755be2fd",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDH20+3vfo84Cwf\nTpKZ/S1KMt2yXhzv1yKIG0DpJML4NjSeuEjYWDcDBxy9vEqtGnXnmz2WyW9CVM/i\n4Xn/EYB1/qf04FXR9ubPT1cxxpVVHqe8y8opcY+JD2/jooHXi20QkiStOTWtegv+\n2irdiIoLbDFjyJAjq9JQWPJwyqF/1jQWRtSOA7O4mr9eAa7DXSTgdY3/eUXl7aCl\nTfgxgnegVgtkUjBy/sxSbM3v1ni12v9n1SKVkPxmSce+V+qPBOen4buruls6Ln/T\n4DyGZ3mxQXCkYHIUj1DJzgdERdGzwH09x+PiSZyXvVTpmCzH+veW3x6fotPF315m\n82R5ApOvAgMBAAECggEAWun4gxCwR0YAvEMdbGBf3Ft0P0IRrsbyRfED36rh6FCc\nMkGJnaTPbZisKeGAJOufC/syEqhSbN2w7bf9K5tWERcFZ18vmwJSb6bbduCrqNt3\nmWoo7h5jGYnEr8wKfbdGp12bwpL+SIp273lmO31zsouGkio364orc3Jq4wVCXyiP\ngSfesjsFUQIcNwyf6H9ofumV59mQPUvVLoTuRwYR6HXZB2UkWUzRzrnqe8IWuZ6/\n/mCsdEXI4bjoOLliun4XW/1jvxPHoOqlEWKqsViqK8sCyDj3z9Trfpmlpb2+3S9I\nmEs4ek/A6lld9A/havp2JKMsMLDzkhqC+05ju3uWTQKBgQDqRKnAqYzHCLgyTCJF\n5J+dkhaRXn2CrtzhV6GaH1TbUIESwiOwAboPuFTkVhn6+Z6XIhYp1r3MU1OAL953\n6IVdp/qjdvIIeK4Cf5ArUONAUcm1653pzzVBEbvKi2a1b4/riznRuZ9WFCyO0qnf\ntZpA2iD5+jO37zohoTmlsAcl3QKBgQDaZXPpswgXeumRqrJrHVHX4kF1K2BKMgUa\nfo3JXsrvA1P/s+zbNjxXjdIW/FKzDfM5PqA8ZgiGTf/eDRw8gY73hZdzzu10u6J3\n7YhtZiRBcNZvTesTVtDWm1ECpjMzt9NIJi43WDazdwWTbUdlSupnxTYLgTD89YlX\nfyZtIv0E+wKBgDbYUmGPkCy8ptrnphJ03sV2ASCRXZLtuzpqWKQLd8NMiptIpjA7\nh0LM5dr7KWPvcqhxS30KEC84xtC45D1wS2DMxcnlO+6tyhc9pBPwAPP68d1MRxEI\n+K++JhfaIPaTIr+DPcsSyPHPEUtymGCOVImgR54ebGNAd3yOET/wAQxlAoGAYA2u\n5WIwdONCRybkQegrTt/cGkRxnTBSvkxa3+4pIuY704K28dLwxzFA7YscdFP2XX8F\nyoq1xRwZJPhvKs1wq7y919ly5px/4G9ASZ1a5M1UArAqa98LCthU0O14J476BgmE\n2iKaLGR0t1qgxBQm9GzwUC8J9LepKCpsJCP3VHECgYEAiFAMNn/lZR950UbuTk3B\nz5OV91k/ZnfvCJyvLRI1LVrt1DbRlHP8R5mxm/bEdeDrC+trtYrMI+6cWQRI5K4u\nGFlNwiEoi6noiW4gbzIg6k7t6LP3lSTkVHd7kvbae+zf00crbUK5oFNZYzX2F9Kt\nZcmlkrk/ozYITflua+QnWT4=\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-ay376@nogarbage-7f3fb.iam.gserviceaccount.com",
    "client_id": "115198911411901637839",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-ay376%40nogarbage-7f3fb.iam.gserviceaccount.com",
    "universe_domain": "googleapis.com"
};

export const serviceAccountCredentials = systemVariables.isDev ? {
    credentials: devServiceAccountKey,
} : {
    credentials: prodServiceAccountKey,
    url: "https://nogarbage-7f3fb-default-rtdb.europe-west1.firebasedatabase.app"
};