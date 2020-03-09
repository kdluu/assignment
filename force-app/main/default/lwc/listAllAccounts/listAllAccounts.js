import { LightningElement, wire } from 'lwc';
import getAccountList from '@salesforce/apex/GetAccountData.getAccountList';
// This class called GetAccountData from apex

export default class ListAllAccounts extends LightningElement {
    @wire(getAccountList) accounts;
}