import * as React from 'react';
import {
    convertToUTCTime,
    convertToOtp,
    findPhone,
} from './';

const defaults: any = {
    time: "2019-01-10T12:14:16Z",
    otp: true,
    phones: [
        {
            "country": "UA",
            "number": "380000000000",
            "validated_at": "2019-01-14T13:54:48.000Z"
        },
        {
            "country": "UA",
            "number": "380111111111",
            "validated_at": "2019-01-13T13:54:48.000Z"
        },
        {
            "country": "UA",
            "number": 380222222222,
            "validated_at": null
        }
    ]
};


describe('Helpers', () => {
    it('convertToOtp', () => {
        expect(convertToOtp(defaults.otp)).toEqual('true');
        expect(convertToOtp(!defaults.otp)).toEqual('false');
    });

    it('convertToUTCTime', () => {
        expect(convertToUTCTime(defaults.time)).toEqual('Thu, 10 Jan 2019 12:14:16 GMT');
        expect(convertToUTCTime('potato')).toEqual('Invalid Date');
    });

    it('findPhone', () => {
        expect(findPhone(defaults.phones).number).toEqual('380000000000');
        defaults.phones.push(
            {
                "country": "AX",
                "number": "123456789098",
                "validated_at": "2019-01-17T13:54:48.000Z"
            })
        expect(findPhone(defaults.phones).number).toEqual('123456789098');
    });
});
