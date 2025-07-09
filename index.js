  const email = "nawarabtahi@gmail.com";
  const discordID = "BuildsPixled#5583";

  function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
      alert(`Copied: ${text}`);
    }, () => {
      alert('Failed to copy!');
    });
  }

  document.getElementById('email-copy').addEventListener('click', function(e) {
    e.preventDefault();
    copyToClipboard(email);
  });

  document.getElementById('discord-copy').addEventListener('click', function(e) {
    e.preventDefault();
    copyToClipboard(discordID);
  });