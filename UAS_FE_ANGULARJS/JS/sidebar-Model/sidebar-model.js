angular.module('myApp')
  .component('sidebarComponent', {
    templateUrl: 'JS/components/sidebar/sidebar.component.html',
    controller: function() {
      this.sidebarTitle = 'Admin Dashboard';
    }
  });
