$('body').on('input', '.rect_field_inp1', function(){
	this.value = this.value.replace(/[^а-яё\s]/gi, '');
});