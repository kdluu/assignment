public with sharing class GetDeveloperContact {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getDeveloperConttact(){
             return [SELECT LastName, Title FROM Contact WHERE Title='Application Developer'];
    }
}
