import React from 'react';
import './MainContent.css';

    function MainContent() {
    const article = {
        title: 'Mbappe đến Real Madrid?',
    image: 'https://cdn.tuoitre.vn/thumb_w/480/471584752817336320/2024/10/7/2024-10-05t183853z1719850619up1eka51fsr8yrtrmadp3soccer-spain-rma-vil-report-17283116719401627815465.jpg',
        content: `Mbappe, 25 tuổi, đã ký hợp đồng 5 năm tới 2029 với câu lạc bộ Real Madrid sau khi rời Paris Saint-Germain dưới dạng chuyển nhượng tự do. Theo các nguồn tin, Mbappe sẽ hưởng lương 16,28 triệu USD mỗi năm tại câu lạc bộ mới cùng khoản thưởng 162,8 triệu USD phụ thuộc vào thành tích và mức độ cống hiến.16 thg 7, 2024.`,
    author: 'Nguyễn Thành Lộc',
    date: 'October 8, 2024',
};

return (
    <main className="main-content">
    <div className="article">
        <h1>{article.title}</h1>
            <img src={article.image} alt="Web Design" />
                <p className="content">{article.content}</p>
    <div className="article-meta">
    <p>Written by: {article.author}</p>
    <p>Date: {article.date}</p>
</div>
</div>
</main>
);
}

export default MainContent;
