

$('#btnComment').on('click', function(e) {
   $('#formComment').removeClass('hidden');
   $('#commentArea').focus();
});

//ajax select2
 var $ajax = $(".sample-search"); 
         
 function formatRepo (repo) {
      if (repo.loading) return repo.text;

      var markup = "<div class='flex'>" +
          "<dl><dt>Name: </dt><dd>" + repo.full_name + "</dd></dl>" +
          "<dl><dt>Versia: </dt><dd>V." + repo.forks_count + "</dd></dl>" +
          "<dl><dt>Size: </dt><dd>" + repo.stargazers_count + "</dd></dl>";          

      if (repo.description) {
        markup += "<dl><dt>Description: </dt><dd>" + repo.description + "</dd></dl>";
      }

      markup += "<dl><dt>Name: </dt><dd>" + repo.watchers_count + "</dd></dl>" +
        "<dl><dt>Subject ID: </dt><dd>" + repo.forks_count +  "</dd></dl>" +
        "<dl><dt><span class='text-success'>Analyzed</span> </dt><dd>12.12.2015 23:34</dd></dl>" +
        "</div>";

      return markup;
    }
 function formatRepoSelection (repo) {
      return repo.full_name || repo.text;
    }               
 $ajax.select2({
      ajax: {
        url: "https://api.github.com/search/repositories",
        dataType: 'json',
        delay: 250,
        data: function (params) {
          return {
            q: params.term, // search term
            page: params.page
          };
        },
        processResults: function (data, params) {
          // parse the results into the format expected by Select2
          // since we are using custom formatting functions we do not need to
          // alter the remote JSON data, except to indicate that infinite
          // scrolling can be used
          params.page = params.page || 1;

          return {
            results: data.items,
            pagination: {
              more: (params.page * 30) < data.total_count
            }
          };
        },
        cache: true
      },
      escapeMarkup: function (markup) { return markup; },
      minimumInputLength: 1,
      templateResult: formatRepo,
      templateSelection: formatRepoSelection
    });
     


$('#selectSample .table-list-xs dl').on('click', function(e) {
   $('#selectSample').modal('hide');
});
$('#selectView .table-list-xs dl').on('click', function(e) {
   $('#selectView').modal('hide');
});
$('#selectGPanel .table-list-xs dl').on('click', function(e) {
   $('#selectGPanel').modal('hide');
});


$('.faq').on('click', function(e) {
   $('#selectGPanel').modal('hide');
});



$('#info').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('whatever') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this);
  var tab =  $('.' + recipient + '-tab');
  tab.tab('show');
});


$('#selectSample').on('shown.bs.modal', function (e) {
  
  $('#selectSample .btn').each(function(e){
    
    button = $(this);
     button.button('reset');
     });
})
$('#selectPhenotype').on('shown.bs.modal', function (e) {
  
$('#selectPhenotype .btn').each(function(e){
    
    button = $(this);
     button.button('reset');
     });
});



/*
$('.btn-edit').each(function () {
    var button = $(this); 
    var row = button.closest('div.row');
    var rowMore = row.find('div.collapse');
    
    button.on('click', function(e) {
    row.toggleClass('edited-row');
    rowMore.collapse('show');
  });
});
*/

$('.btn-toggle').each(function () {
    var button = $(this); 

    button.on('click', function(e) {
      var div  = button.closest('div.row');
      var collapsed = div.find('div.collapse')
      collapsed.collapse('toggle');
    });
});
$('#variants_table_head .form-control').each(function () {
    var input = $(this); 
    var div = input.closest('div');
    
    input.focus(function(e) {
     div.addClass('active');
    });
    input.focusout(function(e) {
      div.removeClass('active');
    });
});
$('#variants_table_body td').each(function () {
    var td = $(this); 
    var tr = td.closest('tr');
    
    td.on('click', function(e) {
    tr.toggleClass('active');
  });
});



$('#gwasBtn').on('click', function() { 
  $(this).toggleClass('active'); 
 });


//select2        
$('.select2').select2({
  placeholder: "Not chosen",
  minimumResultsForSearch: Infinity
});
$('.select2-search').select2({
  placeholder: "Not chosen",
});
$('.select2-tags').select2({
  placeholder: "Not chosen",
  tags: true,
  tokenSeparators: [',', ' ']
});

$('.select2-multiple').select2();


function formatState (state) {
  if (!state.id) { return state.text; }
  var $state = $(
    '<span><i class="fa fa-'+ state.element.value.toLowerCase() + '"/></i> ' + state.text + '</span>'
  );
  return $state;
};
 
$(".select2-with-icons").select2({
  templateResult: formatState,
  placeholder: "Not chosen",
  minimumResultsForSearch: Infinity
});


$('.btn-edit').each(function () {
    var button = $(this); 
    var row = button.closest('div.panel');
    var rowMore = row.find('div.collapse');
    
    button.on('click', function(e) {
    row.toggleClass('edit-mode');
    rowMore.collapse('toggle');
  });
});

$('.btn-toggle').each(function () {
    var button = $(this); 

    button.on('click', function(e) {
      var div  = button.closest('div.panel');
      var collapsed = div.find('div.collapse')
      collapsed.collapse('toggle');
    });
});


//


//layout// sidebar  
// media query event handler
if (matchMedia) {
	var mq = window.matchMedia("(min-width: 768px)");
	mq.addListener(WidthChange);
	WidthChange(mq);
}

// media query change
function WidthChange(mq) {

	if (mq.matches) {
		// window width is at least 768px
		$('[data-toggle="tooltip"]').tooltip({
  		trigger: "hover",
  		delay: { "show": 500, "hide": 100 }
		});
	}
	else {
		// window width is less than 768px
		$('#subnav').collapse('hide');
		$('body').addClass("subnav-closed");
		$('[data-toggle="tooltip"]').tooltip('destroy');
		$('[data-toggle="tooltip"]').tooltip({
  		trigger: "click"
		});
		
	}

}

//layout
    $('#sidebarLeft').on('hide.bs.collapse', function () {
        $('body').addClass("sidebar-left-closed");
    });
    $('#sidebarLeft').on('shown.bs.collapse', function () {
        $('body').removeClass("sidebar-left-closed");
        $('[data-toggle="tooltip"]').tooltip('destroy');
        $('[data-toggle="tooltip"]').tooltip({
  		    trigger: "click"
		    });
      });
    $('#sidebarRight').on('hide.bs.collapse', function () {
     
     $('body').addClass("sidebar-right-closed");
     $('[data-toggle="tooltip"]').tooltip('destroy');
      $('[data-toggle="tooltip"]').tooltip({
  		  trigger: "click"
		  });
     });
    $('#sidebarRight').on('shown.bs.collapse', function () {
        $('body').removeClass("sidebar-right-closed");
    });
    $('#regBtn').on('click', function (e) {
     $('#registration').removeClass('hidden') ;
     $('#signin').addClass('hidden');
    });
    $('.user-view').on('hide.bs.collapse', function () {
        $('body').removeClass("sidebar-closed");
    });
    $('.user-view').on('show.bs.collapse', function () {
        $('body').removeClass("sidebar-closed");
    });   
    $('#subnav').on('hidden.bs.collapse', function () {
      $('body').addClass("subnav-closed");
    });
    $('#subnav').on('show.bs.collapse', function () {  
      $('body').removeClass("subnav-closed");
      console.log('show.bs.collapse');
    }); 
    $('#selectColumns, #filter').on('hidden.bs.modal', function (e) {
  
      $('#analyzeBtnGroup').tooltip('destroy');
      $('#analyzeBtnGroup').tooltip({
         template: '<div class="tooltip fadeInUp" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
         trigger: 'click',
         container: 'body',
         placement: 'bottom'
      });
      $('#analyzeBtnGroup').tooltip('show'); 
      
    });

    $('.selectTree').select2();

        

$('#analysis').on('shown.bs.modal', function (e) {
 $ajax.select2({
      ajax: {
        url: "https://api.github.com/search/repositories",
        dataType: 'json',
        delay: 250,
        data: function (params) {
          return {
            q: params.term, // search term
            page: params.page
          };
        },
        processResults: function (data, params) {
          // parse the results into the format expected by Select2
          // since we are using custom formatting functions we do not need to
          // alter the remote JSON data, except to indicate that infinite
          // scrolling can be used
          params.page = params.page || 1;

          return {
            results: data.items,
            pagination: {
            more: (params.page * 30) < data.total_count
            }
          };
        },
        cache: true
      },
      escapeMarkup: function (markup) { return markup; },
      minimumInputLength: 1,
      templateResult: formatRepo,
      templateSelection: formatRepoSelection
    });
})
       
//jquery builder selects
$('#builder-basic .selectTree').each(function () {
            var button = $(this);
            button.select2().on('change', function(e) {
             
             $("#copyfilterField").collapse("show");
             $("#newfilterField").collapse("show");
          });
      });

$('#builder-basic .selectTree').select2()
  .on("change", function(e) {
     //$(".copyfilter").collapse();
     //$("#filterSelector").val(null).trigger("change");
});


  
// temp actions
$('#btnLogin').on('click', function (e) {
  $('.guest').addClass("hidden");
  $('.user').removeClass("hidden");
 });
$('#btnLogout').on('click', function (e) {
  $('user').addClass("hidden");
  $('#guest').removeClass("hidden");
});

$('#userEditBtn').on('click', function (e) {
   $('.user-view').toggleClass('hidden')
  });
$('.usrViewActBtn').on('click', function (e) {
   $('.user-view').toggleClass('hidden')
});
$('.btn-sort.active').on('click', function (e) { 
   $(this).toggleClass('asc').toggleClass('desc');
});




 //tree

$('.tree-grid-rubrics').treegrid({
      expanderExpandedClass: 't-minus',
      expanderCollapsedClass: 't-plus'
  });


$('.modal-dialog').draggable({
    handle: ".modal-header" 
});
$('.modal-dialog').draggable({
    handle: ".modal-header" 
});

$('.navbar-search-field .form-control').focus(function() {
    $( ".navbar-search-field .btn-link i" ).removeClass("hidden");
 });

 
$('#searchPlaceHld').on('click', function (e) {
  $('#upload').modal();
});



$('a[href="#single"]').on('shown.bs.tab', function (e) {
  $('#analysisPrice').val('2 credits (from 97 lefted)');
})
$('a[href="#tumorNormal"]').on('shown.bs.tab', function (e) {
  $('#analysisPrice').val('3 credits (from 96 lefted)');
})
$('a[href="#caseControl"]').on('shown.bs.tab', function (e) {
  $('#analysisPrice').val('4 credits (from 95 lefted)');
})
$('a[href="#family"]').on('shown.bs.tab', function (e) {
  $('#analysisPrice').val('5 credits (from 94 lefted)');
})
$('a[href="#gwas"]').on('shown.bs.tab', function (e) {
  $('#analysisPrice').val('10 credits (from 89 lefted)');
})
  
/*
$('#symptoms').focus(function() {  
    
});
*/
   
$('#fileOpen').on('hide.bs.modal', function (e) {
   $('#uploadedSample').removeClass("hidden");
    $('#dropArea').addClass("hidden");
    $('#btnSavelLoad').removeClass("hidden");
});

$('#fileOpen1').on('hide.bs.modal', function (e) {
   $('#btnLoadGengr').addClass("hidden");
    $('#btnOpenGengr').removeClass("hidden");
});
$('#fileOpen2').on('hide.bs.modal', function (e) {
   $('#samplePhotos').removeClass("hidden");
   
});

/*
$('#singleimg').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget); 
  var img = button.data('whatever') ;
  var imgmodal = $(this);
  imgmodal.find('.modal-title').text(img);
  imgmodal.find('.modal-body img').src('images/photos/' + img + 'jpg');
});
*/


$('#upload').on('shown.bs.modal', function (e) {
  $('#sampleFirst .collapse').collapse('show');
});
$('#upload').on('hide.bs.modal', function (e) {
  $('#sampleFirst .collapse').collapse('hide');
})
$('#btnCancelLoad').on('click', function (e) {
  $('#cancelLoadMessage').removeClass("hidden");
});
 
$('#btnConfirmCancel').on('click', function (e) {
  $('#cancelLoadMessage').addClass("hidden");
  $('#uploadedSample').addClass("hidden");
  $('#dropArea').removeClass("hidden");
});



$('#btnSavelLoad').on('click', function () {
  $('#btnSavelLoad .btn-text').addClass("hidden");
  $('#btnSavelLoad .btn-result').removeClass("hidden");
  });
  
$('#btnRight').on('click', function () {
  $('#searchPlaceHld strong').toggleClass("hidden");
 });
$('#btnLeft').on('click', function () {
  $('#searchPlaceHld strong').toggleClass("hidden");
 });

$( "#uplPhenSelect" ).change(function() {
   $('#savedChangeMessage').removeClass("hidden"); 
});

$( "#uplFilterSelect" ).change(function() {
   $('#savedChangeMessage').removeClass("hidden"); 
});

$( "#uplViewSelect" ).change(function() {
   $('#savedChangeMessage').removeClass("hidden"); 
});


$('#btnSampleV').on('click', function (e) {
  $('#sampleV1').toggleClass("hidden");
  $('#sampleV2').toggleClass("hidden");
});