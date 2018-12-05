# Mocha

Mocha is a unit testing framework for JavaScript, which can run in both browser and Node. JS environments.

With mocha, we just need to focus on writing the unit test itself, and then let Mocha run all the tests automatically and give the test results.

The main characteristics of mocha are:

1. You can test both simple JavaScript functions and asynchronous code, because asynchrony is one of the characteristics of JavaScript.

2. All tests can be run automatically, also can run specific tests only.

3. Mocha can support before, after, beforeEach and afterEach to write initialization code.

# Unit test

What's the point of passing a unit test? If we modify the code of ABS () function, we only need to run the unit test again. If we pass the test, it shows that our modification will not affect the original behaviour of ABS () function. If the test fails, it shows that our modification is inconsistent with the original behaviour, either modify the code or modify the test.

The greatest advantage of this test-driven development model is to ensure that the behaviours of a program module conforms to the test cases we designed. In future modifications, it can be guaranteed that the module's behaviours is still correct to a great extent.

# Prepration

    1. Install
    
    sudo npm install mocha
    sudo npm install chai
    
    2.
    creat a file named "test" and a javascript named "test.js" which under the file
    


# Assert and Chai library

    var  foo = 'bar'
    , beverages = { tea: [ 'chai', 'matcha', 'milktea' ] };

    assert.typeOf(abc, 'string'); 
    // without optional message
    assert.typeOf(abc, 'string', 'abc is a string'); 
    // with optSupplementaryional message
    assert.equal(abc, 'bar', 'abc equal `bar`');
    assert.lengthOf(abc, 3, 'abc`s value has a length of 3');
    assert.lengthOf(beverages.tea, 3, 'beverages has 3 types of tea');

    var chai = require('chai');
    var assert = chai.assert;
    var expect = chai.expect;
    var should = chai.should();

# TDD and BDD

TDD: test-driven Development is a core practice and technology in agile Development as well as a design methodology. TDD works by writing unit test case code before functional code is developed, which determines what product code needs to be written. The basic idea of TDD is to promote the whole development process through testing. However, test-driven development is not just a test work, but a quantitative process of requirement analysis, design and quality control. TDD first considers the use of requirements (object, function, process, interface, etc.), mainly to write a test case framework to design the process and interface of function, and the test framework can continuously verify.

BDD: Behavior Driven Development (BDD) is an agile software Development technique that encourages collaboration between developers, QA, and non-technical or business participants in a software project. Mainly from the user's needs, emphasis on system behavior. Originally named by Dan North in 2003, BDD includes extreme programming practices such as acceptance testing and customer test-driven, in response to test-driven development.

# Basic commands

     -h, --help                              输出帮助信息    
     -V, --version                           输出mucha版本    
     -A, --async-only                        强制让所有测试用例必须使用callback或者返回promise的方式来异步判断正确性    
     -c, --colors                            启用报告中颜色    
     -C, --no-colors                         禁用报告中颜色    
     -G, --growl                             enable growl notification support    
     -O, --reporter-options <k=v,k2=v2,...>  reporter-specific options    
     -R, --reporter <name>                   specify the reporter to use    
     -S, --sort                              排序测试文件    
     -b, --bail                              bail after first test failure    
     -d, --debug                             enable node's debugger, synonym for node --debug
     -g, --grep <pattern>                    只执行满足 <pattern>格式的用例    
     -f, --fgrep <string>                    只执行含有 <string> 的用例    
     -gc, --expose-gc                        展示gc回收的log    
     -i, --invert                            让 --grep 和 --fgrep 的匹配取反    
     -r, --require <name>                    require一下<name>指定的模块    
     -s, --slow <ms>                         指定slow时间（单位ms，默认75ms）    
     -t, --timeout <ms>                      指定超时时间（单位ms，默认2000ms）    
     -u, --ui <name>                         指定user-interface (bdd|tdd|exports)    
     -w, --watch                             观察用例文件变化，并重新执行    
     --check-leaks                           检测未回收global变量泄露    
     --compilers <ext>:<module>,...          用指定的模块来编译文件    
     --debug-brk                             启用node的debug模式    
     --delay                                 等待异步的用例集（见前边的）    
     --es_staging                            enable all staged features    
     --full-trace                            display the full stack trace    
     --globals <names>                       allow the given comma-delimited global [names]    
     --harmony                               enable all harmony features (except typeof)    
     --harmony-collections                   enable harmony collections (sets, maps, and weak maps)    
     --harmony-generators                    enable harmony generators    
     --harmony-proxies                       enable harmony proxies    
     --harmony_arrow_functions               enable "harmony arrow functions" (iojs)    
     --harmony_classes                       enable "harmony classes" (iojs)    
     --harmony_proxies                       enable "harmony proxies" (iojs)    
     --harmony_shipping                      enable all shipped harmony features (iojs)    
     --inline-diffs                          显示预期和实际结果的string差异比较    
     --interfaces                            display available interfaces    
     --no-deprecation                        silence deprecation warnings    
     --no-exit                               require a clean shutdown of the event loop: mocha will not call process.exit    
     --no-timeouts                           禁用timeout，可通过--debug隐式指定    
     --opts <path>                           定义option文件路径    
     --prof                                  显示统计信息    
     --recursive                             包含子目录    
     --reporters                             展示可用报告    
     --retries                               设置失败用例重试次数    
     --throw-deprecation                     每次调用deprecated函数的时候都抛出一个异常    
     --trace                                 显示函数调用栈    
     --trace-deprecation                     启用的时候显示调用栈    
     --watch-extensions <ext>,...            --watch监控的扩展    
