import { faEarDeaf } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * EarDeaf icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const EarDeaf = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faEarDeaf} {...props} />;
};

export default EarDeaf;
