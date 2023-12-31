function getCookie(name) {
  var cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) === (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

function count(type){
    const resultElement = document.getElementById('num');
    let number = resultElement.innerText;
    if(type === 'plus') {
        number = parseInt(number) + 1;
    } else if(type === 'minus')  {
        if(number != 0){
            number = parseInt(number) - 1;
        }
    }
    resultElement.innerText = number;
}

function pushCart(id){
    var number = document.getElementById('num');
    var csrftoken = getCookie('csrftoken');
    $.ajax({
        url: '/product/cart/create/',
        method: 'POST',
        headers: {
          'X-CSRFToken': csrftoken
        },
        data:JSON.stringify({
            "id" : id,
            "quantity" : number.innerText
        }),
        success: function(){
            alert('성공');
            window.location = '/';
        }, error: function(){
            alert('장바구니 넣기 실패');
        }
    })
}
