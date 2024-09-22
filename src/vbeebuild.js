var infoPath = ".\\src\\info.json"
var pat = ''; // Thay đổi thành PAT của bạn
var host = 'http://vlm.lge.com/issue';
var currentUser = '';
var originalIssueKey = '';
var storyPoints = '';
var summarySrc = '';
var prioritySrc = '';
var descriptionSrc = '';

function LoadSource() {
    var pathSrc = browseFolder();
    if(pathSrc) {
        document.getElementById("pathSrc").value = pathSrc;
    } else {
        pathSrc = document.getElementById("pathSrc").value;
    }
}


function getExterntionInfor() {
    originalIssueKey = document.getElementById('issueKey').value;
    storyPoints = parseInt(document.getElementById('storyPoints').value);
    if(!originalIssueKey) {return false;}
    return true;
}

function func1() {
    var username = RunCMDCommand('whoami').replace(/.*\\/g,'');
    var command = 'ssh -p 44240 worker@' + username + '-hkmc.vbee.lge.com'
                + ' && cd /home/worker/build-starfish'
                + ' && source /home/worker/build-starfish/oe-init-build-env';

                "ssh -p 44240 worker@thuong3.nguyen-hkmc.vbee.lge.com && cd /home/worker/build-starfish && source /home/worker/build-starfish/oe-init-build-env && exit"
    RunCMDCommand(command);
    // RunCMDCommand('ssh -p 44240 worker@' + username + '-hkmc.vbee.lge.com source /home/worker/build-starfish/oe-init-build-env');
    // RunCMDCommand('ssh -p 44240 worker@' + username + '-hkmc.vbee.lge.com /home/worker/build-starfish/bitbake/bin/bitbake -c cleanall com.webos.app.home');
    // RunCMDCommand('ssh -p 44240 worker@' + username + '-hkmc.vbee.lge.com /home/worker/build-starfish/bitbake/bin/bitbake -C compile com.webos.app.home');
    alert("username: " + username);
}

function func2() {
    var username = RunCommand('whoami').replace(/.*\\/g,'');
    alert("username: " + username);
}


// set USER_VBEE_NAME=worker
// set VBEE_PATH=thuong3nguyen-webos.vbee.lge.com
// set APP_NAME=com.xplayer.app.nativeqt
// set ACOUNT=thuong3.nguyen
// set PATH_IPK=/home/%USER_VBEE_NAME%/samples/native-apps/built-in/%APP_NAME%/oe-workdir/deploy-ipks/qemux86_64/%APP_NAME%.ipk
// set LOCAL_PATH_IPK=C:\Users\%ACOUNT%\Downloads\%APP_NAME%.ipk
// set WEBOS_PATH_IPK=/media/internal/downloads/%APP_NAME%.ipk
// set KEY_SSH=C:/Users/%ACOUNT%/.ssh/keyssh1.ppk
// set SCRIPT_PATH=/home/%USER_VBEE_NAME%/samples/native-apps/built-in/%APP_NAME%/src/script/run.sh

// echo build ipk
// :: plink -batch -ssh -i C:/Users/thuong3.nguyen/.ssh/keyssh1.ppk -P 40750
// ::    worker@thuong3nguyen-webos.vbee.lge.com
// ::    /home/worker/samples/native-apps/built-in/com.xplayer.app.nativeqt/src/script/run.sh
// ::    /home/worker/samples/native-apps/built-in/com.xplayer.app.nativeqt/src/script/run.sh worker com.xplayer.app.nativeqt
// plink -batch -ssh -i %KEY_SSH% -P 40750 %USER_VBEE_NAME%@%VBEE_PATH% %SCRIPT_PATH% %USER_VBEE_NAME% %APP_NAME%


// if %errorlevel% neq 0 (
//     echo loi xay ra khi build ipk! Thoat khoi tap tin .bat.
//     exit /b %errorlevel%
// )

// echo copy ipk to local
// :: scp -P 40750 worker@thuong3nguyen-webos.vbee.lge.com:
// ::     /home/%USER_VBEE_NAME%/samples/native-apps/built-in/com.xplayer.app.nativeqt/oe-workdir/deploy-ipks/qemux86_64/com.xplayer.app.nativeqt.ipk
// ::     C:\Users\thuong3.nguyen\Downloads\com.xplayer.app.nativeqt.ipk
// scp -P 40750 %USER_VBEE_NAME%@%VBEE_PATH%:%PATH_IPK% %LOCAL_PATH_IPK%

// echo copy ipk to webos
// :: scp -P 6622 C:\Users\thuong3.nguyen\Downloads\com.xplayer.app.nativeqt.ipk
// ::              root@localhost:/media/internal/downloads/com.xplayer.app.nativeqt.ipk
// scp -P 6622 %LOCAL_PATH_IPK% root@localhost:%WEBOS_PATH_IPK%

// echo remove ipk
// :: plink -batch -ssh -P 6622 root@localhost "luna-send -n 1 -f luna://com.webos.applicationManager/closeByAppId '{\"id\":\"com.xplayer.app.nativeqt\"}'"
// plink -batch -ssh -P 6622 root@localhost "luna-send -n 1 -f luna://com.webos.applicationManager/closeByAppId '{\"id\":\"%APP_NAME%\"}'"

// :: plink -batch -ssh -P 6622 root@localhost opkg remove com.xplayer.app.nativeqt
// plink -batch -ssh -P 6622 root@localhost opkg remove %APP_NAME%

// echo install ipk
// :: plink -batch -ssh -P 6622 root@localhost opkg install /media/internal/downloads/com.xplayer.app.nativeqt.ipk
// plink -batch -ssh -P 6622 root@localhost opkg install %WEBOS_PATH_IPK%

// echo reset ipk
// plink -batch -ssh -P 6622 root@localhost "luna-send -n 1 -f luna://com.webos.service.ls2/ls-control/scan-services '{}'"
// plink -batch -ssh -P 6622 root@localhost systemctl restart sam

// :: plink -batch -ssh -P 6622 root@localhost "luna-send -n 1 -f luna://com.webos.applicationManager/launch '{\"id\":\"com.xplayer.app.nativeqt\"}'"
// plink -batch -ssh -P 6622 root@localhost "luna-send -n 1 -f luna://com.webos.applicationManager/launch '{\"id\":\"%APP_NAME%\"}'"
