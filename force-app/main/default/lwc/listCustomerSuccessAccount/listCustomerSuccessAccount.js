import { LightningElement, wire } from 'lwc';
import getCustomerSuccessContact from '@salesforce/apex/GetCustomerSuccessContact.GetCustomerSuccessContact'
export default class ListCustomerSuccessAccount extends LightningElement {
    @wire(getCustomerSuccessContact) contacts;
}