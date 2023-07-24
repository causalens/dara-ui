import { faCode } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Code icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Code = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCode} {...props} />;
};

export default Code;
