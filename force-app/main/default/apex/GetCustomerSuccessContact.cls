public with sharing class GetCustomerSuccessContact {
   @AuraEnabled(cacheable=true)
   public static List<Contact> GetCustomerSuccessContact(){
        return [SELECT LastName, Title FROM Contact WHERE Title='Customer Success'];
   }
}
