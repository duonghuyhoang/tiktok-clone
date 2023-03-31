import Button from '../../button';
import './MenuItems.scss';
function MenuItem({ data }) {
    const MENU_ITEMS = {
        title1: 'English',
        title2: 'Feedback anh help',
        title3: 'Keyboard shortcuts',
    };

    return (
        <div className="menu-items">
            <div className="menu-item">
                <Button>
                    <i class="fa-solid fa-language" style={{ marginRight: 5 }}></i>
                    {MENU_ITEMS.title1}
                </Button>
            </div>
            <div className="menu-item">
                <Button>
                    <i class="fa-solid fa-circle-question" style={{ marginRight: 5 }}></i>
                    {MENU_ITEMS.title2}
                </Button>
            </div>

            <div className="menu-item">
                <Button>
                    <i class="fa-solid fa-keyboard" style={{ marginRight: 5 }}></i>
                    {MENU_ITEMS.title3}
                </Button>
            </div>
        </div>
    );
}

export default MenuItem;
