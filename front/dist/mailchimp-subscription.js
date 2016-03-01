(function(){var decorator,template;template='<a class="close" href="" title="close">\n    <span class="icon icon-delete"></span>\n</a>\n<form>\n    <h2 class="title", translate="LIGHTBOX.DELETE_ACCOUNT.CONFIRM"></h2>\n    <p>\n        <span class="subtitle" translate="LIGHTBOX.DELETE_ACCOUNT.SUBTITLE"></span>\n    </p>\n\n    <p ng-bind-html="\'LIGHTBOX.DELETE_ACCOUNT.BLOCK_PROJECT\' | translate"></p>\n\n    <div class="newsletter">\n        <input name="unsuscribe", type="checkbox", id="unsuscribe" />\n        <label for="unsuscribe" translate="LIGHTBOX.DELETE_ACCOUNT.NEWSLETTER_LABEL_TEXT"></label>\n    </div>\n\n    <div class="options">\n        <a class="button-green" href="" title="{{\'LIGHTBOX.DELETE_ACCOUNT.CANCEL\' | translate}}")>\n            <span translate="LIGHTBOX.DELETE_ACCOUNT.CANCEL"></span>\n        <a class="button-red" href="" title="{{\'LIGHTBOX.DELETE_ACCOUNT.ACCEPT\' | translate}}">\n            <span translate="LIGHTBOX.DELETE_ACCOUNT.ACCEPT"></span>\n        </a>\n    </div>\n</form>',decorator=["$delegate","$tgRepo","$tgAuth","$tgLocation","$tgNavUrls","lightboxService",function($delegate,$repo,$auth,$location,$navUrls,lightboxService){var directive;return directive=$delegate[0],directive.template=template,directive.templateUrl=null,directive.compile=function(){return function($scope,$el,$attrs){var submit;return $scope.$on("deletelightbox:new",function(ctx,user){return lightboxService.open($el)}),$scope.$on("$destroy",function(){return $el.off()}),submit=function(){var params,promise,unsuscribe;return unsuscribe=$el.find("input[name='unsuscribe']").is(":checked"),params={},unsuscribe&&(params.unsuscribe=unsuscribe),promise=$repo.remove($scope.user,params),promise.then(function(data){return lightboxService.close($el),$auth.logout(),$location.path($navUrls.resolve("login"))}),promise.then(null,function(){return console.log("FAIL")})},$el.on("click",".button-green",function(event){return event.preventDefault(),lightboxService.close($el)}),$el.on("click",".button-red",window.taiga.debounce(2e3,function(event){return event.preventDefault(),submit()}))}},$delegate}],window.addDecorator("tgLbDeleteUserDirective",decorator)}).call(this);