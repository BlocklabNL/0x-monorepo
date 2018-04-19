import { AbiDefinition, ContractAbi } from '@0xproject/types';
import { BigNumber } from '@0xproject/utils';

export interface BalancesByOwner {
    [ownerAddress: string]: {
        [tokenAddress: string]: BigNumber;
    };
}

export interface SubmissionContractEventArgs {
    transactionId: BigNumber;
}

export interface BatchFillOrders {
    orders: OrderStruct[];
    signatures: string[];
    takerTokenFillAmounts: BigNumber[];
}

export interface MarketSellOrders {
    orders: OrderStruct[];
    signatures: string[];
    takerTokenFillAmount: BigNumber;
}

export interface MarketBuyOrders {
    orders: OrderStruct[];
    signatures: string[];
    makerTokenFillAmount: BigNumber;
}

export interface BatchCancelOrders {
    orders: OrderStruct[];
}

export interface CancelOrdersBefore {
    salt: BigNumber;
}

export enum AssetProxyId {
    INVALID,
    ERC20,
    ERC721,
}

export interface DefaultOrderParams {
    exchangeAddress: string;
    makerAddress: string;
    feeRecipientAddress: string;
    makerTokenAddress: string;
    takerTokenAddress: string;
    makerTokenAmount: BigNumber;
    takerTokenAmount: BigNumber;
    makerFee: BigNumber;
    takerFee: BigNumber;
    makerAssetData: string;
    takerAssetData: string;
}

export interface TransactionDataParams {
    name: string;
    abi: AbiDefinition[];
    args: any[];
}

export interface MultiSigConfig {
    owners: string[];
    confirmationsRequired: number;
    secondsRequired: number;
}

export interface MultiSigConfigByNetwork {
    [networkName: string]: MultiSigConfig;
}

export interface Token {
    address?: string;
    name: string;
    symbol: string;
    decimals: number;
    ipfsHash: string;
    swarmHash: string;
}

export interface TokenInfoByNetwork {
    development: Token[];
    live: Token[];
}

export enum ExchangeContractErrs {
    ERROR_INVALID,
    ERROR_SUCCESS,
    ERROR_ORDER_INVALID,
    ERROR_ORDER_SIGNATURE_INVALID,
    ERROR_ORDER_EXPIRED,
    ERROR_ORDER_FULLY_FILLED,
    ERROR_ORDER_CANCELLED,
    ERROR_ROUNDING_ERROR_TOO_LARGE,
}

export enum ContractName {
    TokenRegistry = 'TokenRegistry',
    MultiSigWalletWithTimeLock = 'MultiSigWalletWithTimeLock',
    Exchange = 'Exchange',
    ZRXToken = 'ZRXToken',
    DummyToken = 'DummyToken',
    EtherToken = 'WETH9',
    MultiSigWalletWithTimeLockExceptRemoveAuthorizedAddress = 'MultiSigWalletWithTimeLockExceptRemoveAuthorizedAddress',
    MaliciousToken = 'MaliciousToken',
    AccountLevels = 'AccountLevels',
    EtherDelta = 'EtherDelta',
    Arbitrage = 'Arbitrage',
    AssetProxyDispatcher = 'AssetProxyDispatcher',
    ERC20Proxy = 'ERC20Proxy',
    ERC721Proxy = 'ERC721Proxy',
    DummyERC721Token = 'DummyERC721Token',
    LibBytes = 'LibBytes',
}

export interface Artifact {
    contract_name: ContractName;
    networks: {
        [networkId: number]: {
            abi: ContractAbi;
            solc_version: string;
            keccak256: string;
            optimizer_enabled: number;
            unlinked_binary: string;
            updated_at: number;
            address: string;
            constructor_args: string;
        };
    };
}

export interface SignedOrder extends UnsignedOrder {
    signature: string;
}

export interface OrderStruct {
    makerAddress: string;
    takerAddress: string;
    feeRecipientAddress: string;
    makerTokenAmount: BigNumber;
    takerTokenAmount: BigNumber;
    makerFee: BigNumber;
    takerFee: BigNumber;
    expirationTimeSeconds: BigNumber;
    salt: BigNumber;
    makerAssetData: string;
    takerAssetData: string;
}

export interface UnsignedOrder extends OrderStruct {
    exchangeAddress: string;
}

export enum SignatureType {
    Illegal,
    Invalid,
    Caller,
    Ecrecover,
    EIP712,
    Trezor,
    Contract,
}