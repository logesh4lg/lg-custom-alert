# lg-alert

Custom alert using Boostarap 3 and Angular 1.6

# Features

- Make all size popups and alerts using various options

# Installation

1. Use npm to install the new module:

    ```bash
    npm install lg-custom-alert --save
    ```
2. Import the dependency

    1. Bootstrap - CSS is enough
    2. Angular
    3. ui.bootstrap

    ```html
    <!-- Optional -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/2.5.0/ui-bootstrap.min.js" charset="utf-8"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js" charset="utf-8"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.5/angular.min.js" charset="utf-8"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/2.5.0/ui-bootstrap-tpls.js"></script>
    ```


3. Import the `lg.customAlert.min.js` javascript and css file into your HTML file

    ```html
    <script src="lib/ion-datetime-picker/dist/ion-datetime-picker.min.js"></script>
    <link href="lib/ion-datetime-picker/dist/ion-datetime-picker.min.css" rel="stylesheet">
    ```

# Usage

  1. Add `lg.customAlert` as a dependency on your Angular app:

      ```javascript
      angular.module("myApp", ["lg.customAlert", "ui.bootstrap"]);
      ```

  2. Put `lg-alert` directive along with button elements

      - `lg-alert`    - the scope function to be called after alert success
      - `lg-message`  - Message to be displayed in the modal
      - `lg-size`     - Size to be displayed in the modal `['lg', 'md', 'sm']`
          - `lg` - Large size popup or alert
          - `md` - Medium size popup or alert
          - `sm` - Small size popup or alert ###### - Default
      - `lg-type`     - Type of the modal to be displayed in the modal `['confirm', 'proceed', 'ok', 'delete']`
          - `confirm` - Confirmation Popup Before any updates
          - `proceed` - Confirmation Popup Before any process which may affect the system
          - `ok` - Information Popup - shows only OK button
          - `delete` - Confirmation Popup Before any delete

      #### Example
      ```html
      <button class="btn btn-primary"
                    lg-alert="just_log()"
                    lg-message="Please confirm to log the message"
                    lg-size="lg"
                    lg-type="confirm">
           Click for Alert
      </button>
      ```

#### `Refer src/test.HTML`
