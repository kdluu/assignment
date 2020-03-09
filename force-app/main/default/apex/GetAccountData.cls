public with sharing class GetAccountData {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList(){
        return [SELECT Name, NumberofEmployees, Phone FROM Account];
    }
  
   
}
