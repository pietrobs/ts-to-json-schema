/**
 * @pattern "^[\\w#-]+$""
 * @minLength 1
 * @examples this-is-an-energy-farm-id
 */
type CommonId = number;

/**
 * @asType integer 
 * @minimum 1
 * @maximun 31
 * @examples 5
 */
type MonthDay = number;

/**
 * @minimum 1
 * @examples 5
 * @asType integer 
 */
type PositiveNumber = number;

type ValueWithUnit<T,U> = {
    value: T;
    unit: U;
}

type kWp = ValueWithUnit<PositiveNumber, "kWp">
type kW = ValueWithUnit<PositiveNumber, "kW">

type GenerationCapacity = {
    total:  kWp
    sold: kWp
    remaining: kWp
    legal: kW
    maxLegal?: kW
    remainingLegal?: kW
}

/**
 * @minItems 12
 * @maxItems 12
 */
type ArrayWith12Positions<T> = [T]

type EnergyFarmModel = {
    id?: CommonId;
    discoBillReadingDay: MonthDay;
    consortiumId: CommonId;
    discoPassword: string
    discoUsername: string
    fullName: string
    discoConsumerUnitId: CommonId
    type: 'solar' | 'hydro' | 'biogas'
    capacity: GenerationCapacity
    openingDate: Date
    numberOfPanels: PositiveNumber
    monthlyGenerationForecast: {
        unit: "kWh",
        value: ArrayWith12Positions<PositiveNumber>
    }
}

export type CreateEnergyFarmRequest = {
    body: EnergyFarmModel & {
        id: CommonId;
    }
}







