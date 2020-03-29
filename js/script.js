document.getElementById('volume').volume = 0.04;

$(function () {
    count = 0;
    wordsArray = ["Kebab Mecca North ", "#1 Source for Simcity 3000 hacks", "Stardew Valley Aimbotting", "No Ban No Vac No Infidel", "Bacon Detection", "Curbstomp Filthy White Men", "Mohammad (Peace be upon him)", "Halal Launcher", "Burqa Aimbot", "Wallhack no lag", "100% free no torrent", "no virus", "Sheep Fuck Not Included", "Malik Spinbot Toggle", "Cousin Fiddler", "AMD Anti-lag compatible", "Praise Allah", "Age of Consent? What?", "CS:GO BHop Scripts", "tips and tricks", "yallah yallah", "no motherfucker"];
    setInterval(function () {
      count++;
      $("#word").fadeOut(400, function () {
        $(this).text(wordsArray[count % wordsArray.length]).fadeIn(400);
      });
    }, 3000);
  });