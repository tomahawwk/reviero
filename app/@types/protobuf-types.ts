export interface GetPropertyResponse {
  property: Property | undefined;
}

export interface GetMarketplaceRequest {
  minPrice?: number | undefined;
  maxPrice?: number | undefined;
  minBedrooms?: number | undefined;
  maxBedrooms?: number | undefined;
  minBathrooms?: number | undefined;
  maxBathrooms?: number | undefined;
  sortBy?: GetMarketplaceRequestSortBy | undefined;
  condition?: PropertyDataConditionType | undefined;
  limit?: number | undefined;
  offset?: number | undefined;
  ids: number[];
}

export enum GetMarketplaceRequestSortBy {
  MOST_RECENT = 0,
  BIGGEST_FIRST = 1,
  CHEAPEST_FIRST = 2,
  UNRECOGNIZED = -1,
}
export enum PropertyDataConditionType {
  SECOND_HAND = 0,
  NEW_DEVELOPMENT = 1,
  UNRECOGNIZED = -1,
}

export interface GetMarketplacePropertyRequest {
  id: number;
}

export interface GetMarketplacePropertyResponse {
  property: Property | undefined;
}

export interface Property {
  id?: number | undefined;
  type?: PropertyType | undefined;
  address?: Address | undefined;
  coordinates?: Coordinates | undefined;
  data?: PropertyData | undefined;
  annualIncome?: PropertyAnnualIncome | undefined;
  content?: PropertyContent | undefined;
  snippet?: PropertySnippet | undefined;
  children: Property[];
  parent?: Property | undefined;
  activatedTs?: number | undefined;
  createdTs?: number | undefined;
  updatedTs?: number | undefined;
  deletedTs?: number | undefined;
}

export enum PropertyType {
  COMPLEX = 0,
  APARTMENT = 1,
  VILLA = 2,
  UNRECOGNIZED = -1,
}

export interface Address {
  countryId: string;
  provinceId: string;
  cityId: string;
  areaId: string;
  street: string;
  houseNumber: string;
  postalCode: string;
}

export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface PropertyData {
  priceTier?: PropertyDataPriceTier | undefined;
  conditionType?: PropertyDataConditionType | undefined;
  price?: number | undefined;
  basePrice?: number | undefined;
  bedrooms?: number | undefined;
  bathrooms?: number | undefined;
  guests?: number | undefined;
  area?: number | undefined;
  areaLand?: number | undefined;
}
export enum PropertyDataPriceTier {
  BUDGET = 0,
  ECONOMY = 1,
  MODERN = 2,
  LUXURY = 3,
  UNRECOGNIZED = -1,
}

export interface PropertyAnnualIncome {
  occupancyRate: number;
  average: number;
  percent: number;
}

export interface PropertyContent {
  name?: string | undefined;
  description?: string | undefined;
  text?: string | undefined;
  images: string[];
}

export interface PropertySnippet {
  apartment?: Apartment | undefined;
  complex?: Complex | undefined;
}

export interface Apartment {
  type?: ApartmentType | undefined;
  status?: ApartmentStatus | undefined;
  features?: ApartmentFeatures | undefined;
  floor?: number | undefined;
}

export interface Complex {
  status?: ComplexStatus | undefined;
  completed?: ComplexCompleted | undefined;
  endOfConstruction?: ComplexEndOfConstruction | undefined;
  year?: number | undefined;
  communityFees?: number | undefined;
  features?: ComplexFeatures | undefined;
  levels?: number | undefined;
}

export enum ApartmentType {
  GROUND_FLOOR_APARTMENT = 0,
  MIDDLE_FLOOR_APARTMENT = 1,
  TOP_FLOOR_APARTMENT = 2,
  PENTHOUSE = 3,
  PENTHOUSE_DUPLEX = 4,
  DUPLEX = 5,
  GROUND_FLOOR_STUDIO = 6,
  MIDDLE_FLOOR_STUDIO = 7,
  TOP_FLOOR_STUDIO = 8,
  UNRECOGNIZED = -1,
}

export enum ApartmentStatus {
  NOT_PUBLISHED = 0,
  RESERVED = 1,
  ONLINE = 2,
  PUBLISHED_OFFLINE = 3,
  RENTING_OUT = 4,
  SOLD = 5,
  UNRECOGNIZED = -1,
}

export interface ApartmentFeatures {
  furniture?: ApartmentFeaturesFurniture | undefined;
  view: ApartmentFeaturesView[];
  condition?: ApartmentFeaturesCondition | undefined;
  kitchen?: ApartmentFeaturesKitchen | undefined;
  climateControl: ApartmentFeaturesClimateControl[];
  notionIds: string[];
  terrace?: number | undefined;
}

export enum ApartmentFeaturesFurniture {
  FULLY_FURNISHED = 0,
  PART_FURNISHED = 1,
  NOT_FURNISHED = 2,
  UNRECOGNIZED = -1,
}

export enum ApartmentFeaturesView {
  SEA = 0,
  MOUNTAIN = 1,
  GOLF = 2,
  BEACH = 3,
  PORT = 4,
  COUNTRY = 5,
  PANORAMIC = 6,
  GARDEN = 7,
  POOL = 8,
  COURTYARD = 9,
  LAKE = 10,
  URBAN = 11,
  SKI = 12,
  FOREST = 13,
  STREET = 14,
  UNRECOGNIZED = -1,
}

export enum ApartmentFeaturesCondition {
  EXCELLENT = 0,
  GOOD = 1,
  FAIR = 2,
  RENOVATION_REQUIRED = 3,
  RECENTLY_RENOVATED = 4,
  RECENTLY_REFURBISHED = 5,
  RESTORATION_REQUIRED = 6,
  NEW_CONSTRUCTION = 7,
  UNRECOGNIZED = -1,
}

export enum ApartmentFeaturesKitchen {
  FULLY_FITTED = 0,
  PARTIALLY_FITTED = 1,
  NOT_FITTED = 2,
  KITCHEN_LOUNGE = 3,
  UNRECOGNIZED = -1,
}

export enum ApartmentFeaturesClimateControl {
  AIR_CONDITIONING = 0,
  PRE_INSTALLED_AC = 1,
  HOT_AC = 2,
  COLD_AC = 3,
  CENTRAL_HEATING = 4,
  FIREPLACE = 5,
  UF_HEATING = 6,
  UFH_BATHROOMS = 7,
  UNRECOGNIZED = -1,
}

export enum ComplexCompleted {
  SITE_PREPARATION = 0,
  CONSTRUCTION = 1,
  FINISHING = 2,
  INSPECTION_AND_CERTIFICATION = 3,
  READY = 4,
  UNRECOGNIZED = -1,
}

export enum ComplexStatus {
  NOT_PUBLISHED_AND_OFF_MARKET = 0,
  PUBLISHED_OFFLINE = 1,
  OUT_OF_MARKET = 2,
  ONLINE = 3,
  UNRECOGNIZED = -1,
}

export interface ComplexEndOfConstruction {
  month: number;
  year: number;
}

export interface ComplexFeatures {
  locationType: ComplexFeaturesLocationType[];
  security: ComplexFeaturesSecurity[];
  parking: ComplexFeaturesParking[];
  pool: ComplexFeaturesPool[];
  notionIds: string[];
}

export enum ComplexFeaturesLocationType {
  FRONT_LINE_BEACH_COMPLEX = 0,
  CLOSE_TO_GOLF = 1,
  BEACHFRONT = 2,
  CLOSE_TO_PORT = 3,
  FRONTLINE_GOLF = 4,
  CLOSE_TO_SHOPS = 5,
  TOWN = 6,
  CLOSE_TO_SEA = 7,
  SUBURBAN = 8,
  CLOSE_TO_TOWN = 9,
  COUNTRY = 10,
  CLOSE_TO_SCHOOLS = 11,
  COMMERCIAL_AREA = 12,
  CLOSE_TO_SKIING = 13,
  BEACHSIDE = 14,
  CLOSE_TO_FOREST = 15,
  PORT = 16,
  MARINA = 17,
  VILLAGE = 18,
  CLOSE_TO_MARINA = 19,
  MOUNTAIN_PUEBLO = 20,
  URBANISATION = 21,
  UNRECOGNIZED = -1,
}

export enum ComplexFeaturesSecurity {
  SECURITY_24_HOUR_SECURITY_GUARD = 0,
  SECURITY_ALARM_SYSTEM = 1,
  SECURITY_GATED_COMPLEX = 2,
  SECURITY_SAFE = 3,
  SECURITY_ELECTRIC_BLINDS = 4,
  SECURITY_24_HOUR_CAMERAS = 5,
  UNRECOGNIZED = -1,
}

export enum ComplexFeaturesParking {
  UNDERGROUND = 0,
  STREET = 1,
  GARAGE = 2,
  COMMUNAL = 3,
  COVERED = 4,
  GATED = 5,
  UNRECOGNIZED = -1,
}

export enum ComplexFeaturesPool {
  POOL_COMMUNAL = 0,
  POOL_HEATED = 1,
  POOL_CHILDREN_S_POOL = 2,
  UNRECOGNIZED = -1,
}

export interface GetAreaPostsRequest {
  areaId: string;
}

export interface GetNotionRequest {
  ids: string[];
  entityIds: number[];
}

export interface GetNotionResponse {
  items: Notion[];
}

export interface Notion {
  id: string;
  type: NotionType;
  entityId?: string | undefined;
  snippet: NotionSnippet | undefined;
}

export enum NotionType {
  COMPLEX = 0,
  APARTMENT = 1,
  FEATURE = 2,
  CITY = 3,
  COUNTRY = 4,
  PROVINCE = 5,
  AREA = 6,
  DEVELOPER = 7,
  POST_FOR_AREA = 8,
  UNRECOGNIZED = -1,
}

export interface NotionSnippet {
  location?: NotionSnippetLocation | undefined;
  feature?: NotionSnippetFeature | undefined;
  complex?: Complex | undefined;
  apartment?: Apartment | undefined;
  areaPost?: NotionSnippetAreaPost | undefined;
}

export interface NotionSnippetLocation {
  name: string;
  description?: string | undefined;
  country?: string | undefined;
  province?: string | undefined;
  city?: string | undefined;
}

export interface NotionSnippetFeature {
  name: string;
  type: PropertyType[];
  icon?: string | undefined;
}

export interface NotionSnippetAreaPost {
  title: string;
  text: string;
  areaId: string;
  picture: string;
  status: NotionSnippetAreaPostStatus;
}

export enum NotionSnippetAreaPostStatus {
  NOT_STARTED = 0,
  IN_PROGRESS = 1,
  DONE = 2,
  UNRECOGNIZED = -1,
}

export interface GetMarketplaceResponse {
  items: Property[];
  total: number;
}

export interface GetMarketplacePropertyRequest {
  id: number;
}

export interface GetEstimatePurchasePriceRequest {
  price: number;
}

export interface GetEstimatePurchasePriceResponse {
  purchasePrice: number;
  cadastralValue: number;
  prePurchaseCosts: PrePurchaseCosts | undefined;
  purchaseCosts: PurchaseCosts | undefined;
}

export interface PrePurchaseCosts {
  individual: PrePurchaseCostsIndividual | undefined;
  company: PrePurchaseCostsCompany | undefined;
}

export interface PrePurchaseCostsIndividual {
  letterOfAttorney: number;
  foreignerID: number;
  bankAccountRegistration: number;
  documentsTranslation: number;
}

export interface PrePurchaseCostsCompany {
  letterOfAttorney: number;
  foreignerID: number;
  bankAccountRegistration: number;
  documentsTranslation: number;
  companyRegistration: number;
  companyAuthorizedCapital: number;
}

export interface PurchaseCosts {
  newDevelopment: PurchaseCostsValues | undefined;
  secondHand: PurchaseCostsValues | undefined;
}

export interface PurchaseCostsValues {
  vat: number;
  stampDuty: number;
  legalRegistration: number;
  notary: number;
}

export interface GetEstimateIncomeRequest {
  purchasePrice: number;
  annualAverage: number;
  occupancyRate: number;
  conditionType: PropertyDataConditionType;
  communityFees?: number | undefined;
  overPeriod?: number | undefined;
  afterYears?: number | undefined;
}

export interface GetEstimateIncomeResponse {
  cadastralValue: number;
  annualAverage: number;
  costsFees: GetEstimateIncomeResponseCostsFees | undefined;
  euCitizen: GetEstimateIncomeResponseCitizen | undefined;
  nonEuCitizen: GetEstimateIncomeResponseCitizen | undefined;
}

export interface GetEstimateIncomeResponseCostsFees {
  managementFee: number;
  ibi: number;
  basura: number;
  communityFees: number;
}

export interface GetEstimateIncomeResponseCitizen {
  tax: GetEstimateIncomeResponseCitizenRateValue | undefined;
  voids: GetEstimateIncomeResponseCitizenRateValue | undefined;
  totalCosts: number;
  netIncome: number;
}

export interface GetEstimateIncomeResponseCitizenRateValue {
  rate: number;
  value: number;
}

export interface GetMacroeconomicResponse {
  inflation: number;
  annualRevenueIncrease: number;
}
