//크루원 수의 미만과 초과
function checkCrewOver(forms){
  let crewnumber = forms.length;
  if(crewnumber<1 || crewnumber>10000){
    return "크루원 제한에 걸림"
  }
  return forms;
}

//이메일 유효성 검사
function checkEmailForm(forms){
  let email_valid = new RegExp('[a-z0-9]+@email.com');
  let new_crew_list = [];
  forms.map((element)=>{
    let email = element[0];
    if(email.length<11 || email.length>20){
      return false;
    }
    if(email_valid.test(email) == false){
      return false;
    }
    new_crew_list.push(element);
  })
  return new_crew_list;
}

//닉네임 한글 검사
function checkNicknameKorean(forms){
  let check_nickname_korean = new RegExp('^[가-힣]*$');
  let new_crew_list = [];
  forms.map((element)=>{
    let nickname = element[1];
    if(nickname.length<1 || nickname.length>20){
      return false;
    }
    if(check_nickname_korean.test(nickname)== false){
      return false;
    }
    new_crew_list.push(element);
  })
  return new_crew_list;
}

//연속되는 두글자 추출
function checkOverlapKeyword(forms){
  let check_overlap_arr = [];
  forms.map((element)=>{
    crew_nickname = element[1];
    for(i =0;i<crew_nickname.length-1;i++){
      check_overlap_arr.push(crew_nickname.substr(i,2))
    }
  })
  let overlap_arr = check_overlap_arr.filter((element, index) => check_overlap_arr.indexOf(element) != index);
  overlap_arr = new Set(overlap_arr)
  overlap_arr = [...overlap_arr]
  return overlap_arr
}

function problem6(forms) {
  var answer;
  checkNicknameKorean(forms)
  checkEmailForm(forms)
  
  return answer;
}

module.exports = problem6;
