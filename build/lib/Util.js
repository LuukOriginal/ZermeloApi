"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getApiURL = void 0;
const getApiURL = (SchoolDomain) => {
    return `https://${SchoolDomain}.zportal.nl/api/v3`;
};
exports.getApiURL = getApiURL;
