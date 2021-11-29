# Element Vape Checkout Process

-   [ ] Email Validation
    -   [ ] Check If user exist
        -   [ ] If user is not approves by Magento
            -   [x] Get DOB and SSN Number
            -   [x] Check using Veratad Api
            -   [ ] IF FAILED : Upload Files
    -   [ ] Check If user dose not exist
        -   [x] Get DOB and SSN Number
        -   [x] Check using Veratad Api
        -   [ ] IF FAILED : Upload Files
-   [x] Credit Card
    -   [x] Get Credit Card Details
    -   [x] Validate Credit Card Using Authorise.net
    -   [x] If not display alert indigation
-   [ ] Ship Station Integration
