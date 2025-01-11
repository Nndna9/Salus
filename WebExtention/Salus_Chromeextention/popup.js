const painData = {
    children: {
        head: ["Ear Pain: Frequently due to ear infections (otitis media)"],
        neck: ["Neck Pain: Often from poor posture or injury during play"],
        chest: ["Chest Pain: Can be from respiratory infections or muscle strain"],
        abdomen: ["Abdominal Pain: From infections, food intolerance, or constipation"],
        "left-arm": ["Sports Injuries: Sprains or strains", "Growing Pains: Can affect upper arms"],
        "right-arm": ["Sports Injuries: Sprains or strains", "Growing Pains: Can affect upper arms"],
        "left-forearm": ["Overuse Injuries: From writing or sports", "Growth-related discomfort"],
        "right-forearm": ["Overuse Injuries: From writing or sports", "Growth-related discomfort"],
        "left-hand": ["Sprains: From falls or sports", "Writing-related strain"],
        "right-hand": ["Sprains: From falls or sports", "Writing-related strain"],
        "left-leg": ["Growing Pains: Often occurring at night", "Sports Injuries: Sprains, strains"],
        "right-leg": ["Growing Pains: Often occurring at night", "Sports Injuries: Sprains, strains"],
        "left-lower-leg": ["Growing Pains: Night pain", "Sports Injuries"],
        "right-lower-leg": ["Growing Pains: Night pain", "Sports Injuries"]
    },
    teenagers: {
        head: ["Headaches: Stress-related or hormonal"],
        neck: ["Neck Pain: From texting, gaming, studying"],
        chest: ["Muscle Strains: Sports or posture"],
        abdomen: ["Muscle Strains: Sports activities"],
        "left-arm": ["Sports-Related Pain", "Overuse Injuries"],
        "right-arm": ["Sports-Related Pain", "Overuse Injuries"],
        "left-forearm": ["Repetitive Strain: Computer use", "Growth-related pain"],
        "right-forearm": ["Repetitive Strain: Computer use", "Growth-related pain"],
        "left-hand": ["Digital Device Strain", "Sports Injuries"],
        "right-hand": ["Digital Device Strain", "Sports Injuries"],
        "left-leg": ["Knee Pain: Osgood-Schlatter disease"],
        "right-leg": ["Knee Pain: Osgood-Schlatter disease"],
        "left-lower-leg": ["Shin Splints", "Growth pain"],
        "right-lower-leg": ["Shin Splints", "Growth pain"]
    },
    "young-adults": {
        head: ["Migraine: Stress, sleep, hormonal"],
        neck: ["Neck Pain: Screen time, ergonomics"],
        chest: ["Lower Back Pain: Sedentary jobs"],
        abdomen: ["Lower Back Pain: Physical exertion"],
        "left-arm": ["Upper Arm Pain: Workouts", "Repetitive strain"],
        "right-arm": ["Upper Arm Pain: Workouts", "Repetitive strain"],
        "left-hand": ["Overuse Injuries: Tendinitis"],
        "right-hand": ["Overuse Injuries: Tendinitis"],
        "left-leg": ["Exercise Pain", "Muscle Strains"],
        "right-leg": ["Exercise Pain", "Muscle Strains"],
        "left-lower-leg": ["Exercise Pain", "Shin Splints"],
        "right-lower-leg": ["Exercise Pain", "Shin Splints"]
    },
    "middle-aged": {
        head: ["Tension Headaches: Stress"],
        neck: ["Chronic Pain", "Cervical Spondylosis"],
        chest: ["Upper Back Pain: Poor posture"],
        abdomen: ["Lower Back: Degenerative changes"],
        "left-arm": ["Shoulder: Rotator cuff injuries"],
        "right-arm": ["Shoulder: Rotator cuff injuries"],
        "left-hand": ["Arthritic Pain: Early onset"],
        "right-hand": ["Arthritic Pain: Early onset"],
        "left-leg": ["Arthritic Pain: Knees"],
        "right-leg": ["Arthritic Pain: Knees"],
        "left-lower-leg": ["Circulation Issues"],
        "right-lower-leg": ["Circulation Issues"]
    },
     "older-adults": {
        head: ["Chronic Headaches"],
        neck: ["Cervical Spondylosis", "Arthritis"],
        chest: ["Spinal Pain: Stenosis"],
        abdomen: ["Spinal: Degenerative conditions"],
        "left-arm": ["Joint Pain: Arthritis", "Neuropathy"],
        "right-arm": ["Joint Pain: Arthritis", "Neuropathy"],
        "left-forearm": ["Arthritis", "Nerve Compression"],
        "right-forearm": ["Arthritis", "Nerve Compression"],
        "left-leg": ["Joint Pain", "Neuropathy"],
        "right-leg": ["Joint Pain", "Neuropathy"],
        "left-lower-leg": ["Vascular Disease", "Weakness"],
        "right-lower-leg": ["Vascular Disease", "Weakness"]
            }

};

let selectedPart = null;

function updatePainInfo(partId) {
    const ageGroup = document.getElementById('ageGroup').value;
    const painInfo = document.getElementById('painInfo');
    const conditions = painData[ageGroup][partId];

    if (selectedPart) {
        selectedPart.classList.remove('selected');
    }

    const part = document.getElementById(partId);
    if (part) {
        part.classList.add('selected');
        selectedPart = part;
    }

    if (conditions) {
        const partName = partId.replace('-', ' ').toUpperCase();
        painInfo.innerHTML = `
            <h3>${partName}</h3>
            <ul>
                ${conditions.map(condition => `<li>${condition}</li>`).join('')}
            </ul>
        `;
    } else {
        painInfo.innerHTML = '<h3>No specific pain information available for this body part</h3>';
    }
}

// Add click listeners to body parts
document.querySelectorAll('.body-part').forEach(part => {
    part.addEventListener('click', () => updatePainInfo(part.id));
});

// Add change listener to age group selector
document.getElementById('ageGroup').addEventListener('change', () => {
    if (selectedPart) {
        updatePainInfo(selectedPart.id);
    }
});

// Add click listener to Know More button
document.getElementById('knowMoreBtn').addEventListener('click', () => {
    // Replace 'YOUR_WEBSITE_URL' with your actual website URL
    window.open('YOUR_WEBSITE_URL', '_blank');
});