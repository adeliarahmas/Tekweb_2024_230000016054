// Ubah Warna Latar Belakang
document.getElementById('background-color').addEventListener('change', function () {
    document.body.style.backgroundColor = this.value;
});

// Ubah Ukuran Font
document.getElementById('font-size').addEventListener('input', function () {
    document.body.style.fontSize = this.value + 'px';
});

// Toggle Mode Gelap
document.getElementById('toggle-dark-mode').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});

// Ubah Gaya Font
document.getElementById('font-style').addEventListener('change', function () {
    document.body.style.fontFamily = this.value;
});
// Fungsi untuk menambahkan tugas baru
document.getElementById('add-task').addEventListener('click', function () {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
    
    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = ''; // Bersihkan input setelah menambahkan tugas
    }
});

// Fungsi menambahkan tugas ke dalam daftar
function addTask(taskText) {
    const taskList = document.getElementById('task-list');
    
    const li = document.createElement('li');
    li.textContent = taskText;

    // Tambahkan fitur double-click untuk edit
    li.addEventListener('dblclick', function () {
        editTask(li);
    });

    // Tambahkan tombol hapus
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.style.color = 'red';
    deleteBtn.addEventListener('click', function () {
        taskList.removeChild(li); // Hapus tugas
    });
    
    // Tambahkan fitur untuk tandai tugas selesai (bonus)
    li.addEventListener('click', function () {
        li.classList.toggle('completed'); // Beri efek coret
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
}

// Fungsi mengedit tugas
function editTask(taskItem) {
    const currentText = taskItem.textContent.replace('X', '').trim();
    const input = document.createElement('input');
    input.type = 'text';
    input.value = currentText;

    taskItem.textContent = '';
    taskItem.appendChild(input);

    // Simpan perubahan ketika user menekan "Enter"
    input.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            taskItem.textContent = input.value;
            addDeleteButton(taskItem); // Tambahkan tombol delete kembali
        }
    });

    input.focus();
}

// Tambahkan tombol hapus setelah edit
function addDeleteButton(taskItem) {
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.style.color = 'red';
    deleteBtn.addEventListener('click', function () {
        taskItem.remove();
    });

    taskItem.appendChild(deleteBtn);
}
// Fungsi untuk menambahkan tugas baru
document.getElementById('add-task').addEventListener('click', function () {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        addTask(taskText); // Tambahkan tugas ke daftar
        taskInput.value = ''; // Kosongkan kolom input setelah menambahkan tugas
    }
});

// Fungsi menambahkan tugas ke dalam daftar
function addTask(taskText) {
    const taskList = document.getElementById('task-list');
    
    // Buat elemen <li> untuk tugas
    const li = document.createElement('li');
    li.textContent = taskText;

    // Tambahkan fitur klik dua kali untuk mengedit tugas
    li.addEventListener('dblclick', function () {
        editTask(li);
    });

    // Tambahkan tombol hapus untuk tugas
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.style.color = 'red';
    deleteBtn.addEventListener('click', function () {
        taskList.removeChild(li); // Hapus tugas dari daftar
    });

    // Fitur klik untuk menandai tugas sebagai selesai (bonus)
    li.addEventListener('click', function () {
        li.classList.toggle('completed'); // Toggle coret teks
    });

    li.appendChild(deleteBtn); // Tambahkan tombol hapus ke tugas
    taskList.appendChild(li); // Tambahkan tugas ke dalam daftar
}

// Fungsi mengedit tugas
function editTask(taskItem) {
    const currentText = taskItem.textContent.replace('X', '').trim();
    const input = document.createElement('input');
    input.type = 'text';
    input.value = currentText;

    taskItem.textContent = ''; // Kosongkan teks li dan tambahkan input
    taskItem.appendChild(input);

    // Simpan perubahan saat pengguna menekan "Enter"
    input.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            taskItem.textContent = input.value;
            addDeleteButton(taskItem); // Tambahkan kembali tombol hapus setelah edit
        }
    });

    input.focus();
}

// Fungsi untuk menambahkan tombol hapus setelah mengedit
function addDeleteButton(taskItem) {
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.style.color = 'red';
    deleteBtn.addEventListener('click', function () {
        taskItem.remove();
    });

    taskItem.appendChild(deleteBtn);
}
