;(function() {
    'use strict';

    //找到form元素并绑定提交事件
    var createForm = document.getElementById('create');

    init();

    function init() {
        createForm.addEventListener('submit', function(e) {
            e.preventDefault();//阻止提交

            //获取用户输入的昵称，性别，年龄和电话
            var name = document.querySelector('[name=name]').value;
            var gender = document.querySelector('[name=gender]:checked').value;
            var age = document.querySelector('[name=age]').value;
            var phone = document.querySelector('[name=phone]').value;

            //使用builder并设置相关属性
            try {
                var builder = new StudentBuilder();
                builder.setName(name);
                builder.setGender(gender);
                builder.setAge(age);
                builder.setPhone(phone);

                var person = builder.build();
            } catch (e) {
                alert(e);//捕获错误并显示
            }
            console.log(person);
        })
    }

    function Student() {

    }

    //构造student
    function StudentBuilder() {
        this.student = new Student();
    }
    //
    StudentBuilder.prototype.setName = function(name) {
        if(!name) {
            alert('昵称不能为空！');
            throw '昵称错误';
        } else {
            this.student.name  = name;
        }
    }

    StudentBuilder.prototype.setGender = function(gender) {
        if(gender != '男' && gender != '女') {
            alert('请输入正确的性别！');
            throw '性别错误';
        } else {
            this.student.gender = gender;
        }
    }

    StudentBuilder.prototype.setAge = function(age) {
        if(age < 18) {
            alert('未成年禁止入内！');
            throw '未成年';
        } else {
            this.student.age = age;
        }
    }

    StudentBuilder.prototype.setPhone = function(phone) {
        if(phone.length != 11) {
            alert('您的手机号格式不正确，请重新输入！');
            throw '手机格式有误';
        } else {
            this.student.phone = phone;
        }
    }

    StudentBuilder.prototype.build = function() {
        return this.student;
    }
})();