import { faRectangleList } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * RectangleList icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const RectangleList = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faRectangleList} {...props} />;
};

export default RectangleList;
