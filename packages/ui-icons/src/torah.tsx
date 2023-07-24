import { faTorah } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Torah icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Torah = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTorah} {...props} />;
};

export default Torah;
