import { faSpider } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Spider icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Spider = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSpider} {...props} />;
};

export default Spider;
