import { LightningElement, wire } from 'lwc';
import getDeveloperConttact from '@salesforce/apex/GetDeveloperContact.getDeveloperConttact'
export default class ListDeveloperAccount extends LightningElement {
    @wire(getDeveloperConttact) contacts
}