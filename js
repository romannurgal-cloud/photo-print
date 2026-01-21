// DOM элементы
const formatOptions = document.querySelectorAll('.format-option');
const paperOptions = document.querySelectorAll('.paper-option');
const photoQuantity = document.getElementById('photoQuantity');
const decreaseQty = document.getElementById('decreaseQty');
const increaseQty = document.getElementById('increaseQty');
const laminationCheckbox = document.getElementById('lamination');
const retouchCheckbox = document.getElementById('retouch');
const expressCheckbox = document.getElementById('express');
const uploadArea = document.getElementById('uploadArea');
const fileInput = document.getElementById('fileInput');
const uploadedFiles = document.getElementById('uploadedFiles');
const orderBtn = document.getElementById('orderBtn');
const modalOverlay = document.getElementById('modalOverlay');
const closeModal = document.getElementById('closeModal');
const newOrderBtn = document.getElementById('newOrderBtn');

// Элементы для отображения итоговой стоимости
const selectedFormat = document.getElementById('selectedFormat');
const selectedPaper = document.getElementById('selectedPaper');
const selectedQuantity = document.getElementById('selectedQuantity');
const printCost = document.getElementById('printCost');
const extrasList
