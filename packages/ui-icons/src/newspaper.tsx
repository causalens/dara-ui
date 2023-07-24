import { faNewspaper } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Newspaper icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Newspaper = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faNewspaper} {...props} />;
};

export default Newspaper;
