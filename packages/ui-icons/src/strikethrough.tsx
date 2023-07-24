import { faStrikethrough } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Strikethrough icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Strikethrough = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faStrikethrough} {...props} />;
};

export default Strikethrough;
