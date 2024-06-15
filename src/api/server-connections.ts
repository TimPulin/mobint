import Header from '@/components/header/Header';
import { mobintAPI } from './axios-instance';

export function getCards(offset: number, limit: number) {
  mobintAPI.post('getAllCompaniesIdeal', {
    headers: {
      TOKEN: 123,
      'Content-Type': 'application/json',
    },
    params: {
      offset: 0,
      limit: 5,
    },
  });

  return response;
}

const response = {
  companies: [
    {
      company: {
        companyId: '30cc7952-4080-40f0-8f6b-cc8b85ec3dfc',
      },
      customerMarkParameters: {
        loyaltyLevel: {
          number: 3,
          name: 'второй',
          requiredSum: 11594,
          markToCash: 71,
          cashToMark: 95,
        },
        mark: 9596,
      },
      mobileAppDashboard: {
        companyName: 'Венская кофейня',
        logo: 'http://bonusmoney.info/image/mail/logo2.png',
        backgroundColor: '#654D1B',
        mainColor: '#404430',
        cardBackgroundColor: '#FE7A9F',
        textColor: '#D440D1',
        highlightTextColor: '#018682',
        accentColor: '#773A25',
      },
    },
    {
      company: {
        companyId: '91477309-b794-4ba5-a26c-9c924a781e72',
      },
      customerMarkParameters: {
        loyaltyLevel: {
          number: 8,
          name: 'серебряный',
          requiredSum: 750,
          markToCash: 79,
          cashToMark: 84,
        },
        mark: 9225,
      },
      mobileAppDashboard: {
        companyName: 'Автоплюс',
        logo: 'http://bonusmoney.info/image/mail/logo2.png',
        backgroundColor: '#396D96',
        mainColor: '#090D6E',
        cardBackgroundColor: '#5125D8',
        textColor: '#77A1A8',
        highlightTextColor: '#36C9DB',
        accentColor: '#92DF3C',
      },
    },
    {
      company: {
        companyId: '06a58bb0-9ac1-472c-b155-8c19f374f916',
      },
      customerMarkParameters: {
        loyaltyLevel: {
          number: 10,
          name: 'первый',
          requiredSum: 7956,
          markToCash: 12,
          cashToMark: 59,
        },
        mark: 3564,
      },
      mobileAppDashboard: {
        companyName: 'Автоплюс',
        logo: 'http://bonusmoney.info/image/mail/logo1.png',
        backgroundColor: '#01934C',
        mainColor: '#D02662',
        cardBackgroundColor: '#B9D696',
        textColor: '#FD05C9',
        highlightTextColor: '#86BCB1',
        accentColor: '#F0B7F8',
      },
    },
    {
      company: {
        companyId: 'b66c53fd-b60a-4daa-ae6b-639372ec25a9',
      },
      customerMarkParameters: {
        loyaltyLevel: {
          number: 10,
          name: 'золотой',
          requiredSum: 10955,
          markToCash: 41,
          cashToMark: 41,
        },
        mark: 4499,
      },
      mobileAppDashboard: {
        companyName: 'У тебя может получиться!',
        logo: 'http://bonusmoney.info/image/mail/logo3.png',
        backgroundColor: '#9DA4FB',
        mainColor: '#8059FF',
        cardBackgroundColor: '#FDB73A',
        textColor: '#E1EE09',
        highlightTextColor: '#1E1C0C',
        accentColor: '#681A99',
      },
    },
    {
      company: {
        companyId: '495cbd65-a921-4477-9dce-3a68629f0fa0',
      },
      customerMarkParameters: {
        loyaltyLevel: {
          number: 2,
          name: 'платиновый',
          requiredSum: 13987,
          markToCash: 18,
          cashToMark: 71,
        },
        mark: 4296,
      },
      mobileAppDashboard: {
        companyName: 'Венская кофейня',
        logo: 'http://bonusmoney.info/image/mail/bm.png',
        backgroundColor: '#3D095D',
        mainColor: '#B1858F',
        cardBackgroundColor: '#137134',
        textColor: '#B68E43',
        highlightTextColor: '#24883C',
        accentColor: '#09B589',
      },
    },
    {
      company: {
        companyId: 'bd348df7-3acc-438a-a1aa-b57a0303cb13',
      },
      customerMarkParameters: {
        loyaltyLevel: {
          number: 5,
          name: 'третий',
          requiredSum: 8266,
          markToCash: 10,
          cashToMark: 72,
        },
        mark: 7635,
      },
      mobileAppDashboard: {
        companyName: 'Кальянная',
        logo: 'http://bonusmoney.info/image/mail/logo1.png',
        backgroundColor: '#EFEFEF',
        mainColor: '#2688EB',
        cardBackgroundColor: '#FFFFFF',
        textColor: '#949494',
        highlightTextColor: '#1A1A1A',
        accentColor: '#FF3044',
      },
    },
    {
      company: {
        companyId: '4c7b2233-967e-4e43-ab00-8cb5c02f6c8d',
      },
      customerMarkParameters: {
        loyaltyLevel: {
          number: 0,
          name: 'третий',
          requiredSum: 6104,
          markToCash: 45,
          cashToMark: 0,
        },
        mark: 7116,
      },
      mobileAppDashboard: {
        companyName: 'Пробуй еще!',
        logo: 'http://bonusmoney.info/image/mail/logo1.png',
        backgroundColor: '#27C6B5',
        mainColor: '#D1F811',
        cardBackgroundColor: '#D3B392',
        textColor: '#105F7E',
        highlightTextColor: '#9ED53B',
        accentColor: '#B89D0B',
      },
    },
    {
      company: {
        companyId: '8c9a28d4-3222-4d98-8207-9cd53d2ffb82',
      },
      customerMarkParameters: {
        loyaltyLevel: {
          number: 7,
          name: 'пятый',
          requiredSum: 14448,
          markToCash: 91,
          cashToMark: 30,
        },
        mark: 504,
      },
      mobileAppDashboard: {
        companyName: 'Пробуй еще!',
        logo: 'http://bonusmoney.info/image/mail/logo2.png',
        backgroundColor: '#4DF5CF',
        mainColor: '#456FE1',
        cardBackgroundColor: '#A6FEC6',
        textColor: '#392E35',
        highlightTextColor: '#39B8ED',
        accentColor: '#F610C7',
      },
    },
    {
      company: {
        companyId: 'bccb9875-4bc9-488d-8112-82079d66efb8',
      },
      customerMarkParameters: {
        loyaltyLevel: {
          number: 10,
          name: 'серебряный',
          requiredSum: 17923,
          markToCash: 92,
          cashToMark: 52,
        },
        mark: 8012,
      },
      mobileAppDashboard: {
        companyName: 'Кальянная',
        logo: 'http://bonusmoney.info/image/mail/logo2.png',
        backgroundColor: '#EFEFEF',
        mainColor: '#2688EB',
        cardBackgroundColor: '#FFFFFF',
        textColor: '#949494',
        highlightTextColor: '#1A1A1A',
        accentColor: '#FF3044',
      },
    },
    {
      company: {
        companyId: 'a5a092f7-8b44-47fa-b651-1f17faaee13b',
      },
      customerMarkParameters: {
        loyaltyLevel: {
          number: 5,
          name: 'третий',
          requiredSum: 7948,
          markToCash: 76,
          cashToMark: 23,
        },
        mark: 2603,
      },
      mobileAppDashboard: {
        companyName: 'Венская кофейня',
        logo: 'http://bonusmoney.info/image/mail/logo2.png',
        backgroundColor: '#EFEFEF',
        mainColor: '#2688EB',
        cardBackgroundColor: '#FFFFFF',
        textColor: '#949494',
        highlightTextColor: '#1A1A1A',
        accentColor: '#FF3044',
      },
    },
  ],
  limit: 10,
  offset: 0,
};
