import { Instance, types } from 'mobx-state-tree';

const CompanyModel = types.model('Company', {
  company: types.model({
    companyId: types.string,
  }),
  customerMarkParameters: types.model({
    loyaltyLevel: types.model({
      number: types.number,
      name: types.string,
      requiredSum: types.number,
      markToCash: types.number,
      cashToMark: types.number,
    }),
    mark: types.number,
  }),
  mobileAppDashboard: types.model({
    companyName: types.string,
    logo: types.string,
    backgroundColor: types.string,
    mainColor: types.string,
    cardBackgroundColor: types.string,
    textColor: types.string,
    highlightTextColor: types.string,
    accentColor: types.string,
  }),
});

export type CompanyInstance = Instance<typeof CompanyModel>;

const CompaniesStore = types
  .model('CompaniesStore', {
    companies: types.array(CompanyModel),
    _isLoading: types.boolean,
  })
  .actions((self) => ({
    addCompanies(companies: Array<CompanyInstance>) {
      self.companies.push(...companies);
    },

    setIsLoading(isLoading: boolean) {
      self._isLoading = isLoading;
    },
  }))
  .views((self) => ({
    get isLoading() {
      return self._isLoading;
    },
    getCompany(companyId: string) {
      return self.companies.find((item) => item.company.companyId === companyId);
    },
  }));

export default CompaniesStore.create({ companies: [], _isLoading: false });
